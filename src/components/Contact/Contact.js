import { Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';

const Contact = () => {
    return (
        <div>
            <h4 className=' text-3xl text-purple-700 text-center mt-32 mb-10 font-bold'>Contact</h4>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="name@flowbite.com"
                        required={ true }
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        required={ true }
                    />
                </div>
                <div id="textarea">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="comment"
                            value="Your message"
                        />
                    </div>
                    <Textarea
                        id="comment"
                        placeholder="Leave a comment..."
                        required={ true }
                        rows={ 4 }
                    />
                </div>
                <button type="submit" className=' py-4 w-1/4 mx-auto text-white font-bold text-xl bg-purple-600 hover:bg-purple-800 rounded-lg'>
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;