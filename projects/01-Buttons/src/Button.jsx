import './App.css'

export function Button ({buttonClassName="my-button-default", disabelShadow}){
  console.log("disabel shadow",disabelShadow)
  //var newClasName = buttonClassName
  // newClasName = disabelShadow ? newClasName + ' disableShadow': newClasName
  // newClasName = disabled ? newClasName + ' disable ' : newClasName
  return(
    <button className={buttonClassName} >Default</button>
  )
}

