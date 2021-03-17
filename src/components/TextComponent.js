import React from 'react';
import ReactMarkdown from 'react-markdown';


export default function TextComponent(props) {
    return (
        <ReactMarkdown disallowedTypes={['paragraph']} unwrapDisallowed={true}>{props.text}</ReactMarkdown>
    );
}

