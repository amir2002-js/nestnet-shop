function UlLi({li , title}) {
    return (
        <ul className={`font-peyda space-y-3`}>
            <li className={`text-lg font-peydaBold`}>{title}</li>
            {li.map((item) => (
                <li key={item.id}>
                    <button className={`hover:text-gray-700`}>
                        {item.name}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default UlLi;