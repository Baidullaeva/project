import { FC, PropsWithChildren } from 'react';
import cl from './Content.module.css';

const Content: FC<PropsWithChildren> = ({ children }) => {

   return (
      <main className={cl.main}>
         {children}
      </main>
   )
}

export default Content;