import { useAppContext } from '../context/appContext'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import Wrapper from '../assets/wrappers/PageBtnContainer'

const PageBtnContainer = () => {

    const { numOfPages, page, changePage } = useAppContext()

    //takes the number of pages and creates an array from that starting with 1
    //this is for the page # selection buttons
    const pages = Array.from({length: numOfPages},(_,index) => {
        return index +1
    })

    console.log(pages)

    const nextPage = () => {
        let newPage = page + 1
        //check if attempting to go to page over last page; if so go to 1st page
        if (newPage > numOfPages) {
            newPage = 1
        }
        changePage(newPage)
    }

    const prevPage = () => {
        let newPage = page - 1
        //check if attempting to go to page before 1st page; if so go to last page
        if (newPage < 1) {
            newPage = numOfPages
        }
        changePage(newPage)
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
                onClick={ ()=> changePage(pageNumber) } >
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