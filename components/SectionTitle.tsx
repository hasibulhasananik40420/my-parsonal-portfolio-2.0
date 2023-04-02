interface Props{
  title:String,
  titleNumber:string
}
const SectionTitle = ({title,titleNumber}:Props) => {
  return (
    <div className="font-titleFont text-2xl font-semibold flex items-center">
        
        <span className="text-base md:text-lg text-textGreen mr-2">{titleNumber}</span> {title}

        <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[1px] bg-gray-700 ml-6"></span>
    </div>
  )
}

export default SectionTitle