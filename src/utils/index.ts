export const formatTabs = (tab: string) => tab.includes('_') ? tab.split('_').join(' ') : tab.split(' ').join('_').toLowerCase()