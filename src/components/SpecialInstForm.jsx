import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function SpecialInstForm(props) {
    const {onInputChange} = props;
    return (
        <FormGroup>
            <Label>Special Instructions:</Label>
            <Input 
                type="text" 
                name="specIn" 
                placeholder="Ex: well done, square cut"
                onChange={onInputChange} />
        </FormGroup>
    )
}
