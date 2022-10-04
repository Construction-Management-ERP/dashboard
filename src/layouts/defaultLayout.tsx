
import { Toolbar } from 'primereact';
import { Outlet } from 'react-router-dom';
import { AppSidebar } from './components/appSidebar';
import { AppTopbar } from './components/appTopbar';
import { AppTopbarRightMenuItem } from './components/appTopbar/propsType';

const AppTopbarMenuItems: Array<AppTopbarRightMenuItem> = [
  {
    label: 'Update',
    icon: 'pi pi-refresh'
  },
  {
      label: 'Delete',
      icon: 'pi pi-times'
  },
  {
      label: 'React Website',
      icon: 'pi pi-external-link',
      command: () => {
          window.location.href = 'https://reactjs.org/'
      }
  },
  {   label: 'Upload',
      icon: 'pi pi-upload',
      command: () => {
          window.location.hash = "/fileupload"
      }
  }
]

export const DefaultLayout = () => {

  return(
    <div className="flex-auto flex-wrap flex-column app-wrapper height-fullscreen">
      <AppTopbar 
        logo=""
        title='MMPP Admin Dashboard'
        items={AppTopbarMenuItems}
      />

      <AppSidebar />

      <div className='grid'>
        <div className='col-12'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}