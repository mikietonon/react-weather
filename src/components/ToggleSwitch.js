import className from 'classnames';

function ToggleSwitch({ dayOut, dayIn, nightOut, nightIn, ...rest }) {
    const classesOut = className({
        'border-2 border-neutral-50 flex bg-opacity-40 content-center rounded-full h-[25px] w-[45px] transition bg-neutral-50 ease-in': dayOut,
        'border-2 border-neutral-800 flex bg-opacity-40 content-center rounded-full h-[25px] w-[45px] transition bg-neutral-900 ease-in': nightOut,
    });

    const classesIn = className({
        'border-2 border-yellow-600 bg-yellow-500 rounded-full w-[20px] h-[21px] transition ease-in': dayIn,
        'border-2 rounded-full w-[20px] h-[21px] transition translate-x-[21px] bg-neutral-900 border-neutral-700 ease-in': nightIn,
    });

    return (
        <button className={classesOut} {...rest}>
            <div className={classesIn}>
            </div>
        </button>
    );
}

export default ToggleSwitch;