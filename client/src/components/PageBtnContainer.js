import { useAppContext } from '../context/appContext'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import Wrapper from '../assets/wrappers/PageBtnContainer'

const PageBtnContainer = () => {

    const { numOfPages, page } = useAppContext()

    //takes the number of pages and creates an array from that starting with 1
    //this is for the page # selection buttons
    const pages = Array.from({length: numOfPages},(_,index) => {
        return index +1
    })

    console.log(pages)

    const nextPage = () => {
        console.log("next Page")
    }

    const prevPage = () => {
        console.log("prev Page")
    }

     return (
        <Wrapper>
        <button className='prev-btn' onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
        </button>
        <div className="btn-container">
            {pages.map((pageNumber) =>{
                return <button 
                type="button" 
                className={pageNumber === page? 'pageBtn active' : 'pageBtn'} 
                key={pageNumber} 
                onClick={()=>console.log('change page')} >
                    {pageNumber}
                </button>
            })}
        </div>
        <button className='next-btn' onClick={nextPage}>
        next
        <HiChevronDoubleRight />
        </button>
        </Wrapper>
  )
}

export default PageBtnContainer