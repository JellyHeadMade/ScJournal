import React from 'react';

class DropZone extends React.Component {

    MyDropzone() {
        const onDrop = useCallback(acceptedFiles => {
            console.log(acceptedFiles);
        }, [])
        const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

        return (
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop Files here</p> :
                        <p>drag or select file here</p>
                }
            </div>
        )
    }
}

export default DropZone