import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/pages/Login.vue";
import UsersIndex from "@/pages/user/Index.vue"
import UsersList from "@/pages/user/List.vue"
import UsersShow from "@/pages/user/Show.vue"
import UsersEdit from "@/pages/user/Edit.vue"
import UsersCreate from "@/pages/user/Create.vue"
import EquipmentIndex from "@/pages/equipment/Index.vue"
import EquipmentList from "@/pages/equipment/List.vue"
import AreaIndex from "@/pages/area/Index.vue"
import AreaList from "@/pages/area/List.vue"
import TelegramUsersIndex from "@/pages/telegram-users/Index.vue"
import TelegramUsersList from "@/pages/telegram-users/List.vue"
import SettingsIndex from "@/pages/settings/Index.vue"
import SettingsList from "@/pages/settings/List.vue"
import IntegrationIndex from "@/pages/integration/Index.vue"
import IntegrationList from "@/pages/integration/List.vue"
import LogIndex from "@/pages/log/Index.vue"
import LogList from "@/pages/log/List.vue"
import DirectoryIndex from "@/pages/directory/Index.vue"
import DirectoryList from "@/pages/directory/List.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/users',
      component: UsersIndex,
      children: [
        {
          path: '', name: 'users.index', component: UsersList
        },
        {
          path: ':id', name: 'users.show', component: UsersShow
        },
        {
          path: ':id/edit', name: 'users.edit', component: UsersEdit
        },
        {
          path: 'create', name: 'users.create', component: UsersCreate
        },
      ]
    },
    {
      path: '/equipment',
      component: EquipmentIndex,
      children: [
        {
          path: '', name: 'equipment.index', component: EquipmentList
        }
      ]
    },
    {
      path: '/area',
      component: AreaIndex,
      children: [
        {
          path: '', name: 'area.index', component: AreaList
        }
      ]
    },
    {
      path: '/users-telegram',
      component: TelegramUsersIndex,
      children: [
        {
          path: '', name: 'users-telegram.index', component: TelegramUsersList
        }
      ]
    },
    {
      path: '/settings',
      component: SettingsIndex,
      children: [
        {
          path: '', name: 'settings.index', component: SettingsList
        }
      ]
    },
    {
      path: '/integration',
      component: IntegrationIndex,
      children: [
        {
          path: '', name: 'integration.index', component: IntegrationList
        }
      ]
    },
    {
      path: '/log',
      component: LogIndex,
      children: [
        {
          path: '', name: 'log.index', component: LogList
        }
      ]
    },
    {
      path: '/directory',
      component: DirectoryIndex,
      children: [
        {
          path: '', name: 'directory.index', component: DirectoryList
        }
      ]
    }
  ]
})

export default router
