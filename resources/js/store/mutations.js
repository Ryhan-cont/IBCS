
const mutations = {
    TOGGLE_MENU(state, val) {
        state.toggleMenu = val
    },
    HEADER_HEIGHT(state, val) {
        state.headerHeight = val
    },
    HEADER_WIDTH(state, val) {
        state.headeerWidth = val
    },
    MENU_WIDTH_ADJ(state, val) {
        state.menuWidthAdj = val
    },
    USER_NAME(state, val) {
        state.userName = val
    },
    USER_ROLE(state, val) {
        state.userRole = val
    },
    MENU_LIST(state, val) {
        state.menuList = val
    },
    MENU_ACTIVE(state, val) {
        state.avtiveMenuBtn = val
    },
}

export default mutations

