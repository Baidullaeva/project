import { FC, PropsWithChildren } from 'react';
import cl from './Layout.module.css';

const Layout: FC<PropsWithChildren> = ({children}) => {

   return (
      <div className={cl.wrapper}>
         {children}
      </div>
   )
}

export default Layout;