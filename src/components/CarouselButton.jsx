const CarouselButton = ({ label, className, move }) => (
    <button className={className} onClick={move}>{label}</button>
)

export default CarouselButton;
