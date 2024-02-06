function IconStar({fillColor='#fd60b1', onClick = ()=>{}}) {
    return (
            <svg onClick={onClick} validationid="component:star-rating:::svg:::overview_full_star" focusable="false" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                <path 
                    fill="#fd60b1"
                    stroke="#fd60b1"
                    strokeWidth={'1.5px'}
                    opacity={0}
                    d="M0 0h22v22H0z"></path>
                    <path 
                    fill={fillColor}
                    stroke="#fd60b1"
                    strokeWidth={'1.5px'}
                    d="M11.36 1.68l2.26 5.975a.257.257 0 0 0 .228.166l6.38.3a.386.386 0 0 1 .224.687l-4.985 4a.256.256 0 0 0-.087.268l1.684 6.162a.385.385 0 0 1-.583.424l-5.34-3.505a.258.258 0 0 0-.28 0L5.52 19.66a.385.385 0 0 1-.584-.423l1.684-6.165a.256.256 0 0 0-.087-.268l-4.985-4a.386.386 0 0 1 .223-.686l6.382-.3a.257.257 0 0 0 .228-.166l2.26-5.972a.386.386 0 0 1 .72 0z">
                </path>
            </svg>
    );
}

export default IconStar;

