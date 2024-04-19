

const EachTransaction=({transaction})=> {

    console.log('each transaction->',transaction)
    
  return (
        <tr className="">
  <td className="px-3 py-4 text-left 2xl:text-center align-top">
    <input  
      id="check1" 
      name="check1" 
      className="w-6 h-6"
      type="checkbox" 
      />
  </td>
  <td className="pr-4 xl:pr-8 2xl:pr-16 py-4 text-left 2xl:text-center align-top">{transaction.subcategory_name}</td>
  <td className="pr-4 xl:pr-8 2xl:pr-16 py-4 text-left 2xl:text-center align-top">{transaction.subcategory_name}</td>
  <td className="pr-4 xl:pr-8 2xl:pr-16 py-4 text-left 2xl:text-center align-top">{transaction.id}</td>
  <td className="pr-4 xl:pr-8 2xl:pr-16 py-4 text-left 2xl:text-center align-top">{transaction.categoryId}</td>
  <td className="pr-4 xl:pr-8 2xl:pr-16 py-4 text-left 2xl:text-center align-top">{transaction.categoryId}</td>
  <td className="pr-4 xl:pr-8 2xl:pr-16 py-4 text-left 2xl:text-center align-top">{transaction.subcategory_name}</td>
  <td className="pr-4 xl:pr-8 2xl:pr-16 py-4 text-left 2xl:text-center align-top">
    <div className="bg-[#F6E099] rounded-md py-0.5 px-1">{transaction.subcategory_name}</div>
  </td>
  <td className="px-3 py-6 text-left 2xl:text-center align-top">
    <div className="flex gap-1">
      <div className="w-1 h-1 bg-[#515A6A] rounded-full"/>
      <div className="w-1 h-1 bg-[#515A6A] rounded-full"/>
      <div className="w-1 h-1 bg-[#515A6A] rounded-full"/>
    </div>
  </td>
</tr>
      
  )
}


export default EachTransaction
