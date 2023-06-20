import React from "react";

interface ParagraphProps {
    content: string;
}

const Paragraph: React.FunctionComponent<ParagraphProps> = (props) => {
    const { content } = props;
    return (
        <>{content}</>
    );
};

export default Paragraph;
