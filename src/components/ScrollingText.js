//Scrolling text sourced from: https://jackwhiting.co.uk/posts/creating-a-marquee-with-tailwind/
function ScrollingText({ text }) {
    return(
        <div className='rounded-full relative flex overflow-x-hidden'>
            {text.length <= 20 ?
                <>
                    <div className='animate-marquee whitespace-nowrap'>
                        <span className='mx-10'>{text}</span>
                        <span className='mx-10'>-</span>
                        <span className='mx-10'>{text}</span>
                        <span className='mx-10'>-</span>
                        <span className='mx-10'>{text}</span>
                        <span className='mx-10'>-</span>
                    </div>
                    <div className='absolute top-0 animate-marquee2 whitespace-nowrap'>
                        <span className='mx-10'>{text}</span>
                        <span className='mx-10'>-</span>
                        <span className='mx-10'>{text}</span>
                        <span className='mx-10'>-</span>
                        <span className='mx-10'>{text}</span>
                        <span className='mx-10'>-</span>
                    </div>
                </>
                :
                <>
                    <div className='animate-marquee whitespace-nowrap'>
                        <span className='mx-10'>{text}</span>
                        <span className='mx-10'>-</span>
                        <span className='mx-10'>{text}</span>
                        <span className='mx-10'>-</span>
                    </div>
                    <div className='absolute top-0 animate-marquee2 whitespace-nowrap'>
                        <span className='mx-10'>{text}</span>
                        <span className='mx-10'>-</span>
                        <span className='mx-10'>{text}</span>
                        <span className='mx-10'>-</span>
                    </div>
                </>
            }
        </div>
    );
}

export default ScrollingText;