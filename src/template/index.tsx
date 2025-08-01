import { EffectForever } from './effectForever'
import { Effects } from './effects'
import { UnnecessaryEffect } from './unnecessaryEffect'

const templates = [
	{
		title: 'Better Effect',
		group: 'Effect',
		items: {
			effectForever: <EffectForever />,
			unnecessaryEffect: <UnnecessaryEffect />,
			effects: <Effects />
		}
	}
]

export const paths = templates.map((item) => {
	const { title, group } = item

	const items = Object.keys(item.items).map((key) => ({
		path: `/${key}`,
		element: item.items[key as keyof typeof item.items]
	})) as unknown as {
		path: string
		element: JSX.Element
	}[]

	return {
		title,
		group,
		items
	}
})

export default templates
