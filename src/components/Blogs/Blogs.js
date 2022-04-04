import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='border-double border-4 border-gray-500 mx-8 my-12 px-6 py-8 shadow-2xl'>
                <h2 className='text-4xl mb-6 border p-2 border-b-yellow-800 text-lime-700 hover:bg-slate-200 transition'>What is Context API?</h2>
                <p className='text-stone-600'>The React Context API allows us to pass data through our component trees, giving our components the ability to communicate and share data at different levels. That means allows one to share state across the entire app lightly and with ease.<br/> 
                Prop drilling was a major problem for us. Actually Prop drilling is the processing of getting data from component A to component Z by passing it through multiple layers of intermediary React components. The new Context API solve this prop drilling problem for us. We can now easily share anything from a component to another component through this context API. It reduces code repeating and mostly developers are doing their code by short time for this new API. <br/>
                It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <div className='border-double border-4 border-gray-500 mx-8 my-12 px-6 py-8 shadow-2xl'>
                <h2 className='text-4xl mb-6 border p-2 border-b-yellow-800 text-lime-700 hover:bg-slate-200 transition'>What is Semantic Tag?</h2>
                <p className='text-stone-600'>HTML tags are mostly used to format content - these tags tell the browser how to display the content on the page. They give no indication as to what type of content they contain or what role that content plays in the page. <br/>
                Semantic HTML5 addresses this shortcoming by defining specific tags to indicate clearly what role is played by the content those tags contain. That explicit information helps robots/crawlers like Google and Bing to better understand which content is important, which is a subsidiary, which is for navigation, and so on. <br/>
                Div, span are examples of non-semantic HTML elements. They serve only as holders to convey to the browser how the content should be displayed. They give no information about the role the content they contain plays on the page. <br/>
                Header, footer, nav, article are semantic elements. To screen readers and search engine bots, each element defines the role of the content contained within their tags.</p>
            </div>
            <div className='border-double border-4 border-gray-500 mx-8 my-12 px-6 py-8 shadow-2xl'>
                <h2 className='text-4xl mb-6 border p-2 border-b-yellow-800 text-lime-700 hover:bg-slate-200 transition'>What are the differences between inline, block and inline-block?</h2>
                <p className='text-stone-600'>The <strong>inline</strong> elemets don't start on a new line and only occupy just the width it requires. You can’t set the width or height. <br/>
                The <strong>inline-block</strong> elements are formatted just like the inline element, where it doesn’t start on a new line. BUT, you can set width and height values. <br/>
                The <strong>block</strong> element will start on a new line and occupy the full width available. And you can set width and height values.<br/>
                Display: inline-block brought a new way to create side by side boxes that collapse and wrap properly depending on the available space in the containing element. <br/>
                Compared to display: inline, the major difference is that inline-block allows to set a width and height on the element. <br/>
                The difference between display: inline-block and display: block is that, with display: block, a line break happens after the element, so a block element doesn’t sit next to other elements.</p>
            </div>
        </div>
    );
};

export default Blogs;