import theme from '@nuxt-themes/tokens/config'
import { defineTheme } from 'pinceau'

export default defineTheme(
	{
		alpine: {
			$schema: {
				title: 'All the configurable tokens from Alpine.',
				tags: [
					'@studio-icon carbon:blog'
				]
			},
			body: {
				backgroundColor: {
					initial: '#f8fafc',
					dark: '#000000'
				},
				color: {
					initial: '{color.gray.800}',
					dark: '{color.gray.200}'
				}
			},
			backdrop: {
				backgroundColor: {
					initial: 'rgba(255,1,1,0.7)', // TODO: rgba({color.gray.100}, 0.7)
					dark: 'rgba(0,0,0,0.7)' // TODO: rgba({color.gray.900}, 0.7)
				}
			},
			readableLine: '68ch'
		},
		elements: {
			container: {
				maxWidth: '70rem',
				padding: {
					mobile: '{space.6}',
					xs: '{space.8}',
					sm: '{space.12}',
					md: '{space.16}'
				}
			}
		},
		color: {
			white: '#FFFFFF',
			// @ts-ignore
			primary: theme.color.lightred
		},
		prose: {
			p: {
				fontSize: '17px'
			},
		}
	}
)