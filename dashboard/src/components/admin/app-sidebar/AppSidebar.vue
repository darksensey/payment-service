<template>
  <vuestic-sidebar :hidden="isOpen">
    <template slot="menu">
      <sidebar-link
        :to="{ name: 'dashboard' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-dashboard"></span>
          <span>{{ $t('menu.dashboard') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link
        :to="{ name: 'tables' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-tables"></span>
          <span>{{ $t('paymentInfo.title') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link
        :to="{ name: 'login' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-user"></span>
          <span>{{ $t('auth.login') }}</span>
        </span>
      </sidebar-link>
    </template>
  </vuestic-sidebar>
</template>

<script>

import VuesticSidebar
  from '../../../vuestic-theme/vuestic-components/vuestic-sidebar/VuesticSidebar'
import SidebarLink from './components/SidebarLink'
import SidebarLinkGroup from './components/SidebarLinkGroup'

export default {
  name: 'app-sidebar',
  components: {
    VuesticSidebar,
    SidebarLink,
    SidebarLinkGroup
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  }
}

</script>
