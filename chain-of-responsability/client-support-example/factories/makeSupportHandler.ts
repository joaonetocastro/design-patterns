import { SupportHandler } from '../handlers'
import { BrokenProductHandler } from '../handlers/BrokenProductHandler';

export const makeSupportHandler = () => {
    const supportHandler = new SupportHandler();
    const brokenProductHandler = new BrokenProductHandler()

    supportHandler.setNext(brokenProductHandler);
    
    return supportHandler;
}