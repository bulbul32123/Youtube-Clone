import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import LeftNavMunuItems from './LeftNavMunuItems'
import { categories } from  '../utils/contants'
import { Context } from '../context/ContextApi'
export default function LeftNav() {
  const {selectCategories, setSelectCategories , mobileMenu} = useContext(Context)

const navigate = useNavigate()
const ClickHanlder= (name, type)=>{
  switch (type) {
    case 'category':
      return setSelectCategories(name)
      case 'home':
        return setSelectCategories(name)
        case 'menu':
          return false
          default:
        break;
    }
  }
  return (
    <>
      <div className={`md:block  w-[240px] overflow-auto h-full py-4 bg-black absolute z-10 translate-x-[-240px] md:translate-x-[-240px] transition-all md:transition-all ${mobileMenu ? 'md:translate-x-[0] md:relative translate-x-[0]' : ''}`}>
      <div className="flex px-5 flex-col">
        {categories.map((item)=>{
          return (
            <React.Fragment key={item.name}>
            <LeftNavMunuItems 

            text={item.type === 'home' ? 'Home' : item.name}
            icon={item.icon}

            action={()=>{ClickHanlder(item.name, item.type)
              navigate('/')
            }}
            className={`${selectCategories === item.name ? ' bg-white/[0.40]' : '' }`}
            />

            {item.divider && (
              <hr  className='my-5 border-white/[0.2]'/>
            )}

            </React.Fragment>


          )
        })}

              <hr  className='my-5 border-white/[0.2]'/>
              <div className="text-white/[0.5] text-[12px]">
              Clone By: Bulbul 
              </div>

      </div>
      </div>
    </>
  )
}
