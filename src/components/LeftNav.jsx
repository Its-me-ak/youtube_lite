import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import LeftNavMenuItem from './LeftNavMenuItem';
import { Context } from '../context/ContextApi';
import { categories } from '../utils/constant';


const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu } = useContext(Context)
  return (
    <div className='md:block w-[240px] overflow-y-auto h-full py-5 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-[0px] transition-all '>
      <div className="flex px-5 flex-col">
        {categories.map((item) => (
          <>
            <LeftNavMenuItem text={item.type === "home" ? "Home" : item.name} icon={item.icon}
              action={() => { }}
              className={`${selectCategories === item.name ? "bg-white/[0,15]" : ""}`}
            />
            {item.divider && (
              <hr className="my-5 border-white/[0.2]" />
            )}
          </>
        ))}
      </div>
    </div>
  )
}

export default LeftNav
