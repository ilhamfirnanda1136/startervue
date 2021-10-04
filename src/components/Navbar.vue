<template>
  <CNavbar expandable="md" type="dark" color="info">
    <CToggler in-navbar @click="collapsed = !collapsed"/>
    <CNavbarBrand href="#">Latihan</CNavbarBrand>
    <CCollapse :show="collapsed" navbar>
      <CNavbarNav>
        <CNavItem to="/">User</CNavItem>
        <CNavItem to="/Barang">Barang</CNavItem>
        <!-- <li class="nav-item">
            <router-link to="/" target="_self" class="nav-link">User</router-link>
        </li> -->
      </CNavbarNav>
      <!-- Right aligned nav items -->
      <CNavbarNav class="ml-auto">
        <CDropdown
          togglerText="Lang"
          nav
          placement="bottom-end"
        >
            <CDropdownItem>EN</CDropdownItem>
            <CDropdownItem>ES</CDropdownItem>
            <CDropdownItem>RU</CDropdownItem>
            <CDropdownItem>FA</CDropdownItem>
        </CDropdown>
        <CDropdown
          nav
          togglerText="User"
          placement="bottom-end"
        >
          <CDropdownItem>Profile</CDropdownItem>
          <CDropdownItem>Signout</CDropdownItem>
        </CDropdown>
      </CNavbarNav>
    </CCollapse>
  </CNavbar>
</template>

<script>

export default {
  data () {
    return {
      collapsed: false
    }
  }
}
</script>

<style>

</style>