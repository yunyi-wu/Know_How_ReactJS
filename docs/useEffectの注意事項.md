

## エフェクトは不要かも
Reactから用意したエフェクトは外部システムと同期させるものです。
外部システム関係ないの場合（例えば、コンポーネント自身のあるstateの更新による他のstateを更新したい場合）、エフェクトは必要ありません。

[例1](../src/template/unnecessaryEffect.tsx)：
```
const [msg,setMsg] = useState("")
const [name,setName] = useState("")

const onClick = ()=>{
    setName("steve")
}

useEffect(()=>{
    setMsg(`hello ${name}`)
},[name])

return <div>
    <p>{msg}</p>
    <button onClick={onClick}>change name</button>
</div>
```
> この例、「name」の更新による「msg」を更新するのは直感にあうが、そうする必要はありません。Reactはstateを更新して「画面」に反映する時上下の変数を再計算する。だから、以上の例にあるエフェクトを抜いて変数を定義する方がいい

「修正」例1：
<strike>
```
useEffect(()=>{
    setMsg(`hello ${name}`)
},[name])
```
</strike>


```
const helloMsg = `hello ${name}`;
return <div>
    <p>{helloMsg}</p>
    <button onClick={onClick}>change name</button>
</div>
```

## エフェクト依存配列
エフェクト依存配列は必ずJavaScriptで比較できる型。
> 例えば、string,number,boolean等々

比較できない型を入れば、新たな値を更新する際に機能無効化、画面崩れる（永遠に実行続く）等々おこるかもしれません。これらの型は中身同じだとしてもイコールではないです。
以下の例にならないように絶対に気をつけてください

> 例えば、object,ararry等々

[例2](../src/template/effectForever.tsx):
```
const [list, setList] = useState([1, 2, 3, 4, 5, 6])

const changeListItem = (index: number = 0, val: number = 9) => {
	list[index] = val
	setList([...list])
}

const stop = () => {
	setFlgStop(true)
	changeListItem()
}

useEffect(() => {
	if (flgStop) return
	console.warn('Effect forever' + JSON.stringify(list))
	list[list.length - 1] += 1
	setList([...list])
}, [list])

useEffect(() => {
	console.log('Effect once with number' + JSON.stringify(list))
}, [list[0]])

return (
<div>
	F12押下、コンソールを見よう
	<p>{JSON.stringify(list)}</p>
	<button onClick={stop}>永遠中止</button>
</div>
)
```

通常にはエフェクトは画面初期化時、APIからデータ取得していますから一回だけ実行したい場合、依存配列は何も入らず「[]」のままして良い。

## 複数関連エフェクトを遠慮しよう
エフェクトを実行して次は**レンダ(Render)**、頻繫のレンダは画面表示の効率性に影響が出る。
だから、複数関連性高いエフェクト使うと頻繫のレンダで効率が悪い。
以下の例を実行すると「コンソール」にエフェクト中の出力前に必ず「render active」出力されます。

> 初期化際にエフェクト中の出力、「render active」の二度目出力はReact開発環境の特性です、デバッグ用のものですバグではありません

[例3](../src/template/effects.tsx):
```
const [count, setCount] = useState(0)
const [number, setNumber] = useState(0)
const [isOver, setIsOver] = useState(false)

useEffect(() => {
	if (number > 0) setCount(count + 1)
    console.log("Effect 1 active")
}, [number])

useEffect(() => {
	if (count > 5) setIsOver(true)
    console.log("Effect 2 active")
}, [count])

useEffect(() => {
	if (isOver) console.warn('Over')
    console.log("Effect 3 active")
}, [isOver])

const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
	setNumber(+e.target.value)
}

console.log("render active")

return (
<div>
	F12押下、コンソールを見よう
    <br></br>
	<input value={number} onChange={onChange} type="number" />
</div>
)
```

> 以上の例はマイナスになる際にReact理想的な状態となります

逆に別々に切り分け単一の責務を持つようにすれば複数エフェクトになっても効率がそんなに悪くはないでしょう。**以上の例にエフェクト一つ残すようにやってみよう！**




### 参考資料
>  [React - そのエフェクトは不要かも](https://ja.react.dev/learn/you-might-not-need-an-effect)