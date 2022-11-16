export const resolveVerticalNavMenuItemComponent = item => {
    if (item.header) return 'VerticalNavMenuSectionHeader'
    if (item.children) return 'VerticalNavMenuGroup'
    return 'VerticalNavMenuLink'
}

export const hasActiveChild = (item, currentUrl) => {
    const { children } = item

    if (!children) {
        return false
    }

    for (const child of children) {
        if (child.children) {
            if (hasActiveChild(child, currentUrl)) {
                return true
            }
        }

        // Check if the child has a link and is active
        if (child && child.navLink && currentUrl && (child.navLink === currentUrl || currentUrl.includes(child.navLink))) {
            return true
        }
    }

    return false
}

export const removeChildren = (children, openGroup, currentActiveGroup) => {
    children.forEach(child => {
        if (!currentActiveGroup.includes(child.id)) {
            const index = openGroup.indexOf(child.id)
            if (index > -1) openGroup.splice(index, 1)
            if (child.children) removeChildren(child.children, openGroup, currentActiveGroup)
        }
    })
}