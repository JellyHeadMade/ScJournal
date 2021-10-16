import React from 'react';

class CreateStory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            __id: this.props.userId,
            userImage: this.props.userImage,
            userName: this.props.userName,
            postTitle: '',
            postDate: new Date(),
            shipTag: '',
            locationTag: '',
            activityTag: '',
            typeTag: '',
            story: '',
            images: []
        }

        this.handleChange = this.handleChange.bind(this);
        // this.SettingUserInfo = this.SettingUserInfo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.buildForm = this.buildForm.bind(this);
        // this.componentCondfig = this.componentCondfig.bind(this);
        // this.djsConfig = this.djsConfig.bind(this);
        // this.handleImage1drop = this.handleImage1drop.bind(this);
        // this.handleImage2drop = this.handleImage2drop.bind(this);
        // this.handleImage3drop = this.handleImage3drop.bind(this);
        // // this.deleteImage = this.deleteImage.bind(this);
        // this.image1 = React.createRef();
        // this.image2 = React.createRef();
        // this.image3 = React.createRef();

    }

    buildForm() {
        // console.log('im i alive?');
        let formData = new FormData();

        formData.append('test_userImage[userImage]', this.state.userImage);
        formData.append('PostTltle', this.state.postTitle);
        // console.log(formData)

        return formData;
    }

    handleSubmit(event) {
        console.log(event.target[0].value);
        console.log(event.target[1].value);
        console.log(event.target[0].name);
        console.log(event.target[1].name);
        this.setState({
            [event.target[0].name] : event.target[0].value,
            [event.target[1].name] : event.target[1].value
        })
        console.log(this.state.postTitle);
        console.log(this.state.story);
        this.buildForm();
        event.preventDefault();
        // console.log('hey');
        console.log(event.target);

    }


    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    render() {
        // console.log(this.props)
        // console.log(this.props.userName)
        return (
            <form onSubmit={this.handleSubmit} className='create-story-form'>
                <div className='form1' >
                    <input
                        type='text' name='postTitle'
                        placeholder='Enter Name Here'
                        value={this.state.PostTitle}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='text' name='story'
                        placeholder='Tell your story'
                        value={this.state.story}
                        onChange={this.handleChange}
                    />
                    <select name='shipTag' onChange={this.handleChange} value={this.state.shipTag}>
                        <option default>Select your Ship</option>
                        <option value='Aegis Avenger Titan'>Aegis Avenger Titan</option>
                        <option value='Aegis Avenger Warlock'>Aegis Avenger Warlock</option>
                        <option value='Aegis Avenger Renegade'>Aegis Avenger Renegade</option>
                        <option value='Aegis Avenger Stalker'>Aegis Avenger Stalker</option>
                        <option value='Aegis Saber'>Aegis Saber</option>
                        <option value='Aegis Saber Raven'>Aegis Saber Raven</option>
                        <option value='Aegis Saber Comet'>Aegis Saber Comet</option>
                        <option value='Aegis Gladius'>Aegis Gladius</option>
                        <option value='Aegis Gladius Valiant'>Aegis Gladius Valiant</option>
                        <option value='Aegis Gladius Pirate'>Aegis Gladius Pirate</option>
                        <option value='Aegis Redeemer'>Aegis Redeemer</option>
                        <option value='Aegis HammerHead'>Aegis HammerHead</option>
                        <option value='Aegis Eclipse'>Aegis Eclipse</option>
                        <option value='Aegis Vanguard Hoplite'>Aegis Vanguard Hoplite</option>
                        <option value='Aegis Vanguard Warden'>Aegis Vanguard Warden</option>
                        <option value='Aegis Vanguard Harbinger'>Aegis Vanguard Harbinger</option>
                        <option value='Aegis Varguard Sentinel'>Aegis Varguard Sentinel</option>
                        <option value='Aegis Reclaimer'>Aegis Reclaimer</option>
                        <option value='Aegis Retaliator Bomber'>Aegis Retaliator Bomber</option>
                        <option value='Aegis Retaliator Base'>Aegis Retaliator Base</option>
                        <option value='Anvil Terrapin'>Anvil Terrapin</option>
                        <option value='Anvil Hurricane'>Anvil Hurricane</option>
                        <option value='Anvil Carrack'>Anvil Carrack</option>
                        <option value='Anvil Picses'>Anvil Picses</option>
                        <option value='Anvil Valkyrie'>Anvil Valkyrie</option>
                        <option value='Anvil valkyrie Liberator'>Anvil valkyrie Liberator</option>
                        <option value='Anvil Gladiator'>Anvil Gladiator</option>
                        <option value='Anvil Arrow'>Anvil Arrow</option>
                        <option value='Anvil Hawk'>Anvil Hawk</option>
                        <option value='Anvil Ballista'>Anvil Ballista</option>
                        <option value='Anvil F7C Hornet'>Anvil F7C Hornet</option>
                        <option value='Anvil F7C Hornet Wildfire'>Anvil F7C Hornet Wildfire</option>
                        <option value='Anvil F7C-M Super Hornet HeartSeeker'>Anvil F7C-M Super Hornet HeartSeeker</option>
                        <option value='Anvil F7C-S Hornet Ghost'>Anvil F7C-S Hornet Ghost</option>
                        <option value='Anvil F7C-R Hornet Tracker'>Anvil F7C-R Hornet Tracker</option>
                        <option value='Anvil F7C-M Super Hornet'>Anvil F7C-M Super Hornet</option>
                        <option value='Aopoa Khartu-Al'>Aopoa Khartu-Al</option>
                        <option value='Aopoa Nox'>Aopoa Nox</option>
                        <option value='Argo MPUV Personnel'>Argo MPUV Personnel</option>
                        <option value='Argo MPUV Cargo'>Argo MPUV Cargo</option>
                        <option value='Argo Mole'>Argo Mole</option>
                        <option value='Argo Mole Carbon Edition'>Argo Mole Carbon Edition</option>
                        <option value='Argo Talus Edition'>Argo Talus Edition</option>
                        <option value='Banu Defender'>Banu Defender</option>
                        <option value='C.O. Nomad'>C.O. Nomad</option>
                        <option value='C.O. Mustang Alpha'>C.O. Mustang Alpha</option>
                        <option value='C.O. Mustang Alpha Vindicator'>C.O. Mustang Alpha Vindicator</option>
                        <option value='C.O. Mustang Beta'>C.O. Mustang Beta</option>
                        <option value='C.O. Mustang Delta'>C.O. Mustang Delta</option>
                        <option value='C.O. Mustang Gamma'>C.O. Mustang Gamma</option>
                        <option value='C.O. Mustang Omega'>C.O. Mustang Omega</option>
                        <option value='Crusader Mercury Star Runner'>Crusader Mercury Star Runner</option>
                        <option value='Crusader Hercules C2'>Crusader Hercules C2</option>
                        <option value='Crusader Hercules M2'>Crusader Hercules M2</option>
                        <option value='Crusader Hercules A2'>Crusader Hercules A2</option>
                        <option value='Drake Cutlass Black'>Drake Cutlass Black</option>
                        <option value='Drake Cutlass Red'>Drake Cutlass Red</option>
                        <option value='Drake Cutlass Blue'>Drake Cutlass Blue</option>
                        <option value='Drake Buccaneer'>Drake Buccaneer</option>
                        <option value='Drake Herald'>Drake Herald</option>
                        <option value='Drake Caterpillar'>Drake Caterpillar</option>
                        <option value='Drake Caterpillar Pirate Edition'>Drake Caterpillar Pirate Edition</option>
                        <option value='Drake Dragonfly Black'>Drake Dragonfly Black</option>
                        <option value='Drake Dragonfly Yellow'>Drake Dragonfly Yellow</option>
                        <option value='Esperia Talon'>Esperia Talon</option>
                        <option value='Esperia Talon Shrike'>Esperia Talon Shrike</option>
                        <option value='Esperia Prowler'>Esperia Prowler</option>
                        <option value='Esperia Glaive'>Esperia Glaive</option>
                        <option value='Esperia Blade'>Esperia Blade</option>
                        <option value='GreyCat ROC'>GreyCat ROC</option>
                        <option value='GreyCat ROC-DS'>GreyCat ROC-DS</option>
                        <option value='GreyCat PTV'>GreyCat PTV</option>
                        <option value='Kruger P-52 Merlin'>Kruger P-52 Merlin</option>
                        <option value='Kruger P72 Archimedes'>Kruger P72 Archimedes</option>
                        <option value='Kruger P72 Archimedes Emerald'>Kruger P72 Archimedes Emerald</option>
                        <option value='MISC Starfarer'>MISC Starfarer</option>
                        <option value='MISC Starfarer Gemini'>MISC Starfarer Gemini</option>
                        <option value='MISC Freelancer'>MISC Freelancer</option>
                        <option value='MISC Freelancer DUR'>MISC Freelancer DUR</option>
                        <option value='MISC Freelancer MIS'>MISC Freelancer MIS</option>
                        <option value='MISC Freelancer MAX'>MISC Freelancer MAX</option>
                        <option value='MISC Reliant Kore'>MISC Reliant Kore</option>
                        <option value='MISC Reliant Mako'>MISC Reliant Mako</option>
                        <option value='MISC Reliant Sen'>MISC Reliant Sen</option>
                        <option value='MISC Reliant Tana'>MISC Reliant Tana</option>
                        <option value='MISC Prospector'>MISC Prospector</option>
                        <option value='MISC Razor'>MISC Razor</option>
                        <option value='MISC Razor EX'>MISC Razor EX</option>
                        <option value='MISC Razor LX'>MISC Razor LX</option>
                        <option value='Origin M50'>Origin M50</option>
                        <option value='Origin 85X'>Origin 85X</option>
                        <option value='Origin 100i'>Origin 100i</option>
                        <option value='Origin 125a'>Origin 125a</option>
                        <option value='Origin 135c'>Origin 135c</option>
                        <option value='Origin 300i'>Origin 300i</option>
                        <option value='Origin 315p'>Origin 315p</option>
                        <option value='Origin 325a'>Origin 325a</option>
                        <option value='Origin 350r'>Origin 350r</option>
                        <option value='Origin 400i'>Origin 400i</option>
                        <option value='Origin 600i Explorer'>Origin 600i Explorer</option>
                        <option value='Origin 600i Touring'>Origin 600i Touring</option>
                        <option value='Origin 890j'>Origin 890j</option>
                        <option value='RSI Constellation Aquila'>RSI Constellation Aquila</option>
                        <option value='RSI Constellation Phoenix'>RSI Constellation Phoenix</option>
                        <option value='RSI Constellation Phoenix Emerald'>RSI Constellation Phoenix Emerald</option>
                        <option value='RSI Constellation Andromeda'>RSI Constellation Andromeda</option>
                        <option value='RSI Constellation Taurus'>RSI Constellation Taurus</option>
                        <option value='RSI Aurora MR'>RSI Aurora MR</option>
                        <option value='RSI Aurora ES'>RSI Aurora ES</option>
                        <option value='RSI Aurora LX'>RSI Aurora LX</option>
                        <option value='RSI Aurora CL'>RSI Aurora CL</option>
                        <option value='RSI Aurora LN'>RSI Aurora LN</option>
                        <option value='RSI Mantis'>RSI Mantis</option>
                        <option value='RSI Ursa Rover'>RSI Ursa Rover</option>
                        <option value='RSI Ursa Rover Foruna'>RSI Ursa Rover Foruna</option>
                        <option value='Tumbril Nova Tonk'>Tumbril Nova Tonk</option>
                        <option value='Tumbril Cyclone'>Tumbril Cyclone</option>
                        <option value='Tumbril Cyclone TR'>Tumbril Cyclone TR</option>
                        <option value='Tumbril Cyclone RC'>Tumbril Cyclone RC</option>
                        <option value='Tumbril Cyclone RN'>Tumbril Cyclone RN</option>
                        <option value='Tumbril Cyclone AA'>Tumbril Cyclone AA</option>
                        <option value='Tumbril Cyclone MT'>Tumbril Cyclone MT</option>
                        <option value='Vanduul Scythe'>Vanduul Scythe</option>
                    </select>
                    <select name='locationTag' onChange={this.handleChange} value={this.state.locationTag}>
                        <option default>Select Story Location</option>
                        <option value='Microtech'>Microtech</option>
                        <option value='Calliope'>Calliope</option>
                        <option value='Clio'>Clio</option>
                        <option value='Euterpe'>Euterpe</option>
                        <option value='Arc Corp'>Arc Corp</option>
                        <option value='Lyria'>Lyria</option>
                        <option value='Wala'>Wala</option>
                        <option value='Hurston'>Hurston</option>
                        <option value='Aburdeen'>Aburdeen</option>
                        <option value='Arial'>Arial</option>
                        <option value='Magda'>Magda</option>
                        <option value='Ita'>Ita</option>
                        <option value='Crusader'>Crusader</option>
                        <option value='Daymar'>Daymar</option>
                        <option value='Yela'>Yela</option>
                        <option value='Grim Hex'>Grim Hex</option>
                        <option value='Celin'>Celin</option>
                        <option value='R&R HUR-L1'>R&R HUR-L1</option>
                        <option value='R&R HUR-L2'>R&R HUR-L2</option>
                        <option value='R&R HUR-L3'>R&R HUR-L3</option>
                        <option value='R&R HUR-L4'>R&R HUR-L4</option>
                        <option value='R&R HUR-L5'>R&R HUR-L5</option>
                        <option value='R&R CRU-L1'>R&R CRU-L1</option>
                        <option value='R&R CRU-L5'>R&R CRU-L5</option>
                        <option value='R&R ARC-L1'>R&R ARC-L1</option>
                        <option value='R&R MIC-L1'>R&R MIC-L1</option>
                        <option value='R&R CRU-L4'>R&R CRU-L4</option>
                    </select>
                    <select name='activityTag' onChange={this.handleChange} value={this.state.activityTag}>
                        <option default>Select Story Activity</option>
                        <option value='Mining'>Mining</option>
                        <option value='Bounty Hunting'>Bounty Hunting</option>
                        <option value='Courior'>Courior</option>
                        <option value='Trader'>Trader</option>
                        <option value='Escorting'>Escorting</option>
                        <option value='Medic'>Medic</option>
                        <option value='Racing'>Racing</option>
                        <option value='Exploration'>Exploration</option>
                        <option value='Mercenary'>Mercenary</option>
                        <option value='Priacy'>Priacy</option>
                        <option value='Smuggling'>Smuggling</option>
                        <option value='Criminal'>Criminal</option>
                    </select>
                    <select name='typeTag' onChange={this.handleChange} value={this.state.typeTag}>
                        <option default>Select Story Type</option>
                        <option value='Game'>Game Stroy</option>
                        <option value='Lore'>Lore Story</option>
                    </select>
                </div>
                <button className='btn' type='submit'>Enter</button>
            </form>
        )
    }
}

export default CreateStory;