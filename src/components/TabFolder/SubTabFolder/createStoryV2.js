import React, { useState } from 'react';
import {IKImage, IKContext, IKUpload } from 'imagekitio-react';
import ImagePrev from './imagePrev';
import axios from 'axios';

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
        imageThumbnails: [],
        imageIDs: []
    });

    const handleDelete = (e) => {
        axios.delete(`https://scjournalapiv2.herokuapp.com/deleteImage/${storyData.imageIDs[e.target.title]}`)
        .then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
        const indexNum = eval(e.target.title);
        const oldStoryImages = storyData.storyImages;
        const oldStoryThumbnails = storyData.imageThumbnails;
        const oldStoryIDs = storyData.imageIDs;
        if (storyData.storyImages.length <= 1 && storyData.imageThumbnails.length <= 1 && storyData.imageIDs.length <= 1) {
            setStoryData({
                ...storyData,
                storyImages: [],
                imageThumbnails: [],
                imageIDs: []
        })
        } else if (storyData.storyImages.length > 1 && storyData.imageThumbnails.length > 1 && storyData.imageIDs.length > 1) {
            oldStoryImages.splice(indexNum, 1);
            oldStoryThumbnails.splice(indexNum, 1);
            oldStoryIDs.splice(indexNum, 1);
            setStoryData({
                ...storyData,
                storyImages: oldStoryImages,
                imageThumbnails: oldStoryThumbnails,
                imageIDs: oldStoryIDs
            })
        }
    }

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
        setStoryData({
            ...storyData,
            storyImages: [...storyData.storyImages, res.url],
            imageThumbnails: [...storyData.imageThumbnails, res.thumbnailUrl],
            imageIDs: [...storyData.imageIDs, res.fileId],
        });
    };

    const handleChange = (e) =>{
        setStoryData({...storyData, [e.target.name]: e.target.value})
    }

    const buildJSON = () => {
        const storyJSON = {
            "user_id": storyData.__id ? storyData.__id : null,
            "title": storyData.postTitle ? storyData.postTitle : null,
            "post_date": storyData.postDate ? storyData.postDate : null,
            "image1": storyData.storyImages[0] ? storyData.storyImages[0] : null,
            "image1Thumbnail": storyData.imageThumbnails[0] ? storyData.imageThumbnails[0] : null,
            "image1Path": storyData.imageIDs[0] ? storyData.imageIDs[0] : null,
            "image2": storyData.storyImages[1] ? storyData.storyImages[1] : null,
            "image2Thumbnail": storyData.imageThumbnails[1] ? storyData.imageThumbnails[1] : null,
            "image2Path": storyData.imageIDs[1] ? storyData.imageIDs[1] : null,
            "image3": storyData.storyImages[2] ? storyData.storyImages[2] : null,
            "image3Thumbnail": storyData.imageThumbnails[2] ? storyData.imageThumbnails[2] : null,
            "image3Path": storyData.imageIDs[2] ? storyData.imageIDs[2] : null,
            "story": storyData.story ? storyData.story : null,
            "user_image": storyData.userImage ? storyData.userImage : null,
            "ship_tag_id": storyData.shipTag ? storyData.shipTag : null,
            "activity_tag_id": storyData.activityTag ? storyData.activityTag : null,
            "location_tag_id": storyData.locationTag ? storyData.locationTag : null,
            "type_tag_id": storyData.typeTag ? storyData.typeTag : null,
            "username": storyData.userName ? storyData.userName : null
        }
        return JSON.stringify(storyJSON);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalJSON = buildJSON();
        axios({
            method: "post",
            url: "https://scjournalapiv2.herokuapp.com/testpost",
            data: finalJSON,
            headers: { "Content-Type": "application/json" },
          })
            .then(function (response) {
              //handle success
              console.log(response);
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });
        
    }

    return (
        <form onSubmit={handleSubmit} className='create-story-form'>
            <div className='form1' >
                <div className='title-title'>Title:</div>
                <input
                    className='form-title'
                    type='text' name='postTitle'
                    placeholder='Enter Name Here'
                    value={storyData.postTitle}
                    onChange={handleChange}
                />
                <div className='title-story'>Story:</div>
                <input 
                    className='form-story'
                    type='text' name='story'
                    placeholder='Tell your story'
                    value={storyData.story}
                    onChange={handleChange}
                />
                <div className='title-ship-tag'>Ship:</div>
                <select name='shipTag' onChange={handleChange} value={storyData.shipTag} className='ship-tag-select'>
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
                <div className='title-location-tag'>Location:</div>
                <select name='locationTag' onChange={handleChange} value={storyData.locationTag} className='location-tag-select'>
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
                    <option value='Jericho Station'>Jericho Station</option>
                </select>
                <div className='title-activity-tag'>Activity:</div>
                <select name='activityTag' onChange={handleChange} value={storyData.activityTag} className='activity-tag-select'>
                    <option default>Select Story Activity</option>
                    <option value='Mining'>Mining</option>
                    <option value='Bounty Hunting'>Bounty Hunting</option>
                    <option value='Courior'>Courior</option>
                    <option value='Trading'>Trading</option>
                    <option value='Escorting'>Escorting</option>
                    <option value='Medic'>Medic</option>
                    <option value='Racing'>Racing</option>
                    <option value='Exploration'>Exploration</option>
                    <option value='Mercenary'>Mercenary</option>
                    <option value='Priacy'>Priacy</option>
                    <option value='Smuggling'>Smuggling</option>
                    <option value='Criminal'>Criminal</option>
                </select>
                <div className='title-type-tag'>Type:</div>
                <select name='typeTag' onChange={handleChange} value={storyData.typeTag} className='type-tag-select'>
                    <option default>Select Story Type</option>
                    <option value='Game Play'>Game Play</option>
                    <option value='Lore'>Lore</option>
                </select>
            </div>
            <div className='img-preview-container'>
                <ImagePrev index='0' onClick={handleDelete} src={storyData.imageThumbnails[0]} path='0' />
                <ImagePrev index='1' onClick={handleDelete} src={storyData.imageThumbnails[1]} path='1' />
                <ImagePrev index='2' onClick={handleDelete} src={storyData.imageThumbnails[2]} path='2' />
            </div>
            <div className='img-uploaders'>
                <IKContext className='ContextTest' publicKey={publicKey} urlEndpoint={urlEndpoint} authenticationEndpoint={authenticationEndpoint}>
                    {/* need to figure out a different first part of the name instead of story title as that can change between uploads, im thinking 
                    a mix of the username and post count, or even the day.  */}
                    <IKUpload className={storyData.storyImages.length === 3 ? 'no-upload-allowed' : 'upload-allowed'} fileName={`${storyData.postTitle === '' ? "defaultPost" : storyData.postTitle}+postimage_${ranID(7)}`} onSuccess={onSuccess} onError={onError} useUniqueFileName={false}/>
                </IKContext>
            </div>
            <button className='btn-img-upload' type='submit'>Create Story</button>
        </form>
    )
}

export default CreateStoryV2;