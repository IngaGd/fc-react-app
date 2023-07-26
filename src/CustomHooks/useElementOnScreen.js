import { useInView } from 'react-intersection-observer';

const useElementOnScreen = (options) => {
    const [ref, inView] = useInView(options);

    return [ref, inView];
}

export default useElementOnScreen;