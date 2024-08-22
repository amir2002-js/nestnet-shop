function SmBanner({url}) {
    return (
        <div>
            <img src={url} className={`rounded-2xl shadow-[4px_4px_15px_rgba(0,0,0,0.5)]`}/>
        </div>
    );
}

export default SmBanner;