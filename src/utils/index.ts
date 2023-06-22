export const formatTabs = (tab: string) => tab.includes('_') ? tab.split('_').join(' ') : tab.split(' ').join('_').toLowerCase()

export const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' }
    return date.toLocaleDateString("en-US", options)
}