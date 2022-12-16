import emailjs from '@emailjs/browser';
import { Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const { register, handleSubmit } = useForm();

    const formSubmit = (data) => {
        console.log(data);

        emailjs.send('service_ok7xt5p', 'template_rwo6t88', data, "LKBPPLmHN-3FYoV3O")
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                if (response.status == 200)
                    toast.success("Email sent sucessfully")
            }, function (error) {
                toast.error("Failed")
            });
    }
    return (
        <div>
            <h4 className=' text-3xl text-purple-700 text-center mt-32 mb-10 font-bold'>Contact</h4>
            <form onSubmit={ handleSubmit(formSubmit) } className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        { ...register("email") }
                        id="email1"
                        type="email"
                        placeholder="Your Email"
                        required={ true }
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Your Name"
                        />
                    </div>
                    <TextInput
                        { ...register("name") }
                        id="name"
                        type="text"
                        placeholder="Your Name"
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
                        { ...register("message") }
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