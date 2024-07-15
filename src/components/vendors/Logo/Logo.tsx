import logo from '/logo/logo.png';

export const Logo = ({ width = 135, height = 30 }) => {
    return (
        <div className='app-logo'>
            <img src={logo} alt="Logo" width={width} height={height} />
        </div>
    )
}
