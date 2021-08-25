import React from 'react';

import TabBanner from './tabBanner';
import DropTab from './dropTab';
import StoryContent from './SubTabFolder/storyContent';
import ImageGallery from './SubTabFolder/imageGallery';
import CommentContent from './SubTabFolder/commentContent';

class TabBase extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            story : 'Started the day by jumping in a ship to run look out for xero to hack away a crime stat in SPK. Once he was clear I got a contract to recover a black box from a wreak and get it back to grim. Got to grim and after dropping it off and getting back into my ship tvLiquid scanned me and was trying to kill me for having some etam on my ship that I forgot about from last night. I keep him distraced while I radio out to khakis for some escort out of grim. Khakis get close and get tvLiquids attention and I jump up and blast the thrusters twards daymar. Both tvLiquid and khakis hit an astroid but survived. Decided to go roc mine since I still had the ROC in the back of Azure. Went flying twoards Plat and found some minables. Unfortunatly my ROC was busted and I had to abandon it in the desert. Then heard over comms that khakis got a crime stat and was heading over to SPK to clear, I went and followed to run lookout again. At first things go smooth but as khakis is getting close to the pad from EVA another MSR that was fully crewed showed up and looked like they were about to head in. I give the word to khakis and he get prepared to fight. He gets one of them and get hit. I tell him to run out and hop into my ship and I would get him to a place for a new ship and to fix him up. We go back and khakis starts to fight a MSR with a Talon. I tried to stay back as getting into the fight would mean I would no longer be crime stat free and would suck as a lookout. Khakis fights him off and they retreat. We then head over to lyria around arcorp. To try out luck there. I get there first and servey they area. Khakis comes in and rest of it went smooth. Once hes clear I swoop in and grab him to take him back to crusader faster then his talon. After all that I head back to grim and call it a night after quite the day. No money made but good memories forsure. '
        }
    }

    render() {
        return (
            <div className='tab-base-stack-container'>
                <TabBanner />
                <DropTab type='Story' order='1' content={<StoryContent story={this.state.story} />}/>
                <DropTab type='Images' order='2' content={<ImageGallery />} />
                <DropTab type='Comments' order='3' content={<CommentContent />} />
                
            </div>
        )
    }
}

export default TabBase;