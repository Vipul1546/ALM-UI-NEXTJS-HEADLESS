
function IconStar({fillColor='full', onClick = ()=>{}}) {
    console.log(fillColor);
    return (
        <i className={`fa-star ${fillColor==='full'?'fas':'far'}`} 
        aria-hidden="true" 
        onClick={onClick}></i>
    );
}

export default IconStar;

