import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function ScrollHint(props) {
    return (
        <div className={'invisible sm:visible text-' + props.shade + '-600 absolute bottom-8 flex flex-col right-1/2 translate-x-1/2'}>
          <a className='pb-2'>Scroll</a>
          <FontAwesomeIcon className='animate-bounce h-6 align-middle' icon={faArrowDown} />
        </div>
    )
}

export default ScrollHint;