import '../ui/overlay.css'

const Overlay = ({ content }) => {
    return (
            <div className="overlay">
                <span className="overlay-text">{ content }</span>
                <span className="overlay-icon">⤴️</span>
            </div>
    )
}

export default Overlay