import React, { useState } from 'react';
import {IKImage, IKContext, IKUpload } from 'imagekitio-react';

import DropZoneComponent from 'react-dropzone-component';
import '../../../../node_modules/react-dropzone-component/styles/filepicker.css';
import '../../../../node_modules/dropzone/dist/min/dropzone.min.css';

function CreateStoryV2(props) {

    const publicKey = "public_apc8wdtxr+MUmacre+57Wpm132I=";
    let urlEndpoint = "https://ik.imagekit.io/yfmtxjiun";
    const authenticationEndpoint = "https://scjournalapiv2.herokuapp.com/authenticationEndpoint";

    const [storyData, setStoryData] = useState({
        __id: props.userId,
        userImage: props.userImage,
        userName: props.userName,
        postTitle: '',
        postDate: new Date(),
        shipTag: '',
        locationTag: '',
        activityTag: '',
        typeTag: '',
        story: '',
        storyImages: [],
        imageMax: false,
        hash: '', 
        password: ''
    });

    const ranID = (length) => {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const onError = (err) => {
        console.log('Error');
        console.log(err);
    };
      
    const onSuccess = (res) => {
        console.log('Success');
        console.log(res);
        console.log(res.url);
        console.log(res.name);
        console.log(res.thumbnailUrl);
    };

    const handleChange = (e) =>{
        setStoryData({...storyData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(storyData);
    }

    // handles for Dropzone component, ignore for now
    const handleImage1drop = () => {
        return {
            addedfile: file => setStoryData({...storyData, image1: file})
        }

    }
    const handleImage2drop = () => {
        return {
            addedfile: file => setStoryData({...storyData, image2: file})
        }
    }
    const handleImage3drop = () =>{
        return {
            addedfile: file => setStoryData({...storyData, image3: file})
        }
    }
    
    const componentConfig = () => {
        return {
            iconFiletypes: ['.jpg', '.png'], 
            showFiletypeIcon: true,
            postUrl: 'https://httpbin.org/post'
        }
    }

    const djsConfig = () => {
        return {
            addRemoveLinks: true,
            maxFiles: 1
        }
    }

    return (
        <form onSubmit={handleSubmit} className='create-story-form'>
            <div className='form1' >
                <input
                    type='text' name='postTitle'
                    placeholder='Enter Name Here'
                    value={storyData.postTitle}
                    onChange={handleChange}
                />
                <input 
                    type='text' name='story'
                    placeholder='Tell your story'
                    value={storyData.story}
                    onChange={handleChange}
                />
                <select name='shipTag' onChange={handleChange} value={storyData.shipTag}>
                    <option default>Select your Ship</option>
                    <option value='1'>Aegis Avenger Titan</option>
                    <option value='2'>Aegis Avenger Warlock</option>
                    <option value='3'>Aegis Avenger Renegade</option>
                    <option value='4'>Aegis Avenger Stalker</option>
                    <option value='5'>Aegis Saber</option>
                    <option value='6'>Aegis Saber Raven</option>
                    <option value='7'>Aegis Saber Comet</option>
                    <option value='8'>Aegis Gladius</option>
                    <option value='9'>Aegis Gladius Valiant</option>
                    <option value='10'>Aegis Gladius Pirate</option>
                    <option value='11'>Aegis Redeemer</option>
                    <option value='12'>Aegis HammerHead</option>
                    <option value='13'>Aegis Eclipse</option>
                    <option value='14'>Aegis Vanguard Hoplite</option>
                    <option value='15'>Aegis Vanguard Warden</option>
                    <option value='16'>Aegis Vanguard Harbinger</option>
                    <option value='17'>Aegis Varguard Sentinel</option>
                    <option value='18'>Aegis Reclaimer</option>
                    <option value='19'>Aegis Retaliator Bomber</option>
                    <option value='20'>Aegis Retaliator Base</option>
                    <option value='21'>Anvil Terrapin</option>
                    <option value='22'>Anvil Hurricane</option>
                    <option value='23'>Anvil Carrack</option>
                    <option value='24'>Anvil Picses</option>
                    <option value='25'>Anvil Valkyrie</option>
                    <option value='26'>Anvil valkyrie Liberator</option>
                    <option value='27'>Anvil Gladiator</option>
                    <option value='28'>Anvil Arrow</option>
                    <option value='29'>Anvil Hawk</option>
                    <option value='30'>Anvil Ballista</option>
                    <option value='31'>Anvil F7C Hornet</option>
                    <option value='32'>Anvil F7C Hornet Wildfire</option>
                    <option value='33'>Anvil F7C-M Super Hornet HeartSeeker</option>
                    <option value='34'>Anvil F7C-S Hornet Ghost</option>
                    <option value='35'>Anvil F7C-R Hornet Tracker</option>
                    <option value='36'>Anvil F7C-M Super Hornet</option>
                    <option value='37'>Aopoa Khartu-Al</option>
                    <option value='38'>Aopoa Nox</option>
                    <option value='39'>Argo MPUV Personnel</option>
                    <option value='40'>Argo MPUV Cargo</option>
                    <option value='41'>Argo Mole</option>
                    <option value='42'>Argo Mole Carbon Edition</option>
                    <option value='43'>Argo Talus Edition</option>
                    <option value='44'>Banu Defender</option>
                    <option value='45'>C.O. Nomad</option>
                    <option value='46'>C.O. Mustang Alpha</option>
                    <option value='47'>C.O. Mustang Alpha Vindicator</option>
                    <option value='48'>C.O. Mustang Beta</option>
                    <option value='49'>C.O. Mustang Delta</option>
                    <option value='50'>C.O. Mustang Gamma</option>
                    <option value='51'>C.O. Mustang Omega</option>
                    <option value='52'>Crusader Mercury Star Runner</option>
                    <option value='53'>Crusader Hercules C2</option>
                    <option value='54'>Crusader Hercules M2</option>
                    <option value='55'>Crusader Hercules A2</option>
                    <option value='56'>Drake Cutlass Black</option>
                    <option value='57'>Drake Cutlass Red</option>
                    <option value='58'>Drake Cutlass Blue</option>
                    <option value='59'>Drake Buccaneer</option>
                    <option value='60'>Drake Herald</option>
                    <option value='61'>Drake Caterpillar</option>
                    <option value='62'>Drake Caterpillar Pirate Edition</option>
                    <option value='63'>Drake Dragonfly Black</option>
                    <option value='64'>Drake Dragonfly Yellow</option>
                    <option value='65'>Esperia Talon</option>
                    <option value='66'>Esperia Talon Shrike</option>
                    <option value='67'>Esperia Prowler</option>
                    <option value='68'>Esperia Glaive</option>
                    <option value='69'>Esperia Blade</option>
                    <option value='70'>GreyCat ROC</option>
                    <option value='71'>GreyCat ROC-DS</option>
                    <option value='72'>GreyCat PTV</option>
                    <option value='73'>Kruger P-52 Merlin</option>
                    <option value='74'>Kruger P72 Archimedes</option>
                    <option value='75'>Kruger P72 Archimedes Emerald</option>
                    <option value='76'>MISC Starfarer</option>
                    <option value='77'>MISC Starfarer Gemini</option>
                    <option value='78'>MISC Freelancer</option>
                    <option value='79'>MISC Freelancer DUR</option>
                    <option value='80'>MISC Freelancer MIS</option>
                    <option value='81'>MISC Freelancer MAX</option>
                    <option value='82'>MISC Reliant Kore</option>
                    <option value='83'>MISC Reliant Mako</option>
                    <option value='84'>MISC Reliant Sen</option>
                    <option value='85'>MISC Reliant Tana</option>
                    <option value='86'>MISC Prospector</option>
                    <option value='87'>MISC Razor</option>
                    <option value='88'>MISC Razor EX</option>
                    <option value='89'>MISC Razor LX</option>
                    <option value='90'>Origin M50</option>
                    <option value='91'>Origin 85X</option>
                    <option value='92'>Origin 100i</option>
                    <option value='93'>Origin 125a</option>
                    <option value='94'>Origin 135c</option>
                    <option value='95'>Origin 300i</option>
                    <option value='96'>Origin 315p</option>
                    <option value='97'>Origin 325a</option>
                    <option value='98'>Origin 350r</option>
                    <option value='99'>Origin 400i</option>
                    <option value='100'>Origin 600i Explorer</option>
                    <option value='101'>Origin 600i Touring</option>
                    <option value='102'>Origin 890j</option>
                    <option value='103'>RSI Constellation Aquila</option>
                    <option value='104'>RSI Constellation Phoenix</option>
                    <option value='105'>RSI Constellation Phoenix Emerald</option>
                    <option value='106'>RSI Constellation Andromeda</option>
                    <option value='107'>RSI Constellation Taurus</option>
                    <option value='108'>RSI Aurora MR</option>
                    <option value='109'>RSI Aurora ES</option>
                    <option value='110'>RSI Aurora LX</option>
                    <option value='111'>RSI Aurora CL</option>
                    <option value='112'>RSI Aurora LN</option>
                    <option value='113'>RSI Mantis</option>
                    <option value='114'>RSI Ursa Rover</option>
                    <option value='115'>RSI Ursa Rover Foruna</option>
                    <option value='116'>Tumbril Nova Tonk</option>
                    <option value='117'>Tumbril Cyclone</option>
                    <option value='118'>Tumbril Cyclone TR</option>
                    <option value='119'>Tumbril Cyclone RC</option>
                    <option value='120'>Tumbril Cyclone RN</option>
                    <option value='121'>Tumbril Cyclone AA</option>
                    <option value='122'>Tumbril Cyclone MT</option>
                    <option value='123'>Vanduul Scythe</option>
                </select>
                <select name='locationTag' onChange={handleChange} value={storyData.locationTag}>
                    <option default>Select Story Location</option>
                    <option value='1'>Microtech</option>
                    <option value='2'>Calliope</option>
                    <option value='3'>Clio</option>
                    <option value='4'>Euterpe</option>
                    <option value='5'>Arc Corp</option>
                    <option value='6'>Lyria</option>
                    <option value='7'>Wala</option>
                    <option value='8'>Hurston</option>
                    <option value='9'>Aburdeen</option>
                    <option value='10'>Arial</option>
                    <option value='11'>Magda</option>
                    <option value='12'>Ita</option>
                    <option value='13'>Crusader</option>
                    <option value='14'>Daymar</option>
                    <option value='15'>Yela</option>
                    <option value='16'>Grim Hex</option>
                    <option value='17'>Celin</option>
                    <option value='18'>R&R HUR-L1</option>
                    <option value='19'>R&R HUR-L2</option>
                    <option value='20'>R&R HUR-L3</option>
                    <option value='21'>R&R HUR-L4</option>
                    <option value='22'>R&R HUR-L5</option>
                    <option value='23'>R&R CRU-L1</option>
                    <option value='24'>R&R CRU-L5</option>
                    <option value='25'>R&R ARC-L1</option>
                    <option value='26'>R&R MIC-L1</option>
                    <option value='27'>R&R CRU-L4</option>
                    <option value='28'>Jericho Station</option>
                </select>
                <select name='activityTag' onChange={handleChange} value={storyData.activityTag}>
                    <option default>Select Story Activity</option>
                    <option value='1'>Mining</option>
                    <option value='2'>Bounty Hunting</option>
                    <option value='3'>Courior</option>
                    <option value='4'>Trading</option>
                    <option value='5'>Escorting</option>
                    <option value='6'>Medic</option>
                    <option value='7'>Racing</option>
                    <option value='8'>Exploration</option>
                    <option value='9'>Mercenary</option>
                    <option value='10'>Priacy</option>
                    <option value='11'>Smuggling</option>
                    <option value='12'>Criminal</option>
                </select>
                <select name='typeTag' onChange={handleChange} value={storyData.typeTag}>
                    <option default>Select Story Type</option>
                    <option value='1'>Game Play</option>
                    <option value='2'>Lore</option>
                </select>
            </div>
            <div className='img-uploaders'>
                <IKContext className='ContextTest' publicKey={publicKey} urlEndpoint={urlEndpoint} authenticationEndpoint={authenticationEndpoint}>
                    {/* need to figure out a different first part of the name instead of story title as that can change between uploads, im thinking 
                    a mix of the username and post count, or even the day.  */}
                    {storyData.imageMax ? null : <IKUpload className='UploadTest' fileName={`${storyData.postTitle == '' ? "defaultPost" : storyData.postTitle}+postimage_${ranID(7)}`} onSuccess={onSuccess} onError={onError} useUniqueFileName={false}/>}
                </IKContext>
                {/* commented out for now, while i get hooked up to imagekit */}
                {/* <DropZoneComponent 
                    config={componentConfig}
                    djsConfig={djsConfig}
                    eventHandlers={handleImage2drop}
                ></DropZoneComponent>
                <DropZoneComponent 
                    config={componentConfig}
                    djsConfig={djsConfig}
                    eventHandlers={handleImage3drop}
                ></DropZoneComponent> */}
            </div>
            <button className='btn' type='submit'>Enter</button>
        </form>
    )
}

export default CreateStoryV2;