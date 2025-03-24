import './style.css'
function Skeleton (){
    return (
        <article>
            <div  className="skeleton skeleton__image"></div>
            <div className='skeleton_author'>
                <div className="skeleton"></div>
                <div className="skeleton"></div>
            </div>
            <div className='skeleton_description'>
                <div className="skeleton"></div>
                <div className="skeleton"></div>
            </div>
        </article>
    )
}

export default Skeleton;