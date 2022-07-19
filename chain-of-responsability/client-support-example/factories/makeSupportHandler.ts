import { SupportHandler, BrokenProductHandler, SupportEndHandler } from '../handlers'

export const makeSupportHandler = () => {
    const supportEndHandler = new SupportEndHandler();
    const brokenProductHandler = new BrokenProductHandler(supportEndHandler)
    const supportHandler = new SupportHandler(brokenProductHandler);
    
    return supportHandler;
}