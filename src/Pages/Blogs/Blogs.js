import React from 'react';

const Blogs = () => {
    return (

        <div >
            <div className='pt-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div class="card w-full bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="text-red-500 card-title">How will I improve the performance of a React Application?</h2>

                        <ul>
                            <li>Use binding functions in constructors</li>
                            <li>Avoid inline style attributes</li>
                            <li>Avoid extra tags by using React fragments</li>
                            <li>Avoid bundling all of the front end code in a single file</li>
                        </ul>

                    </div>
                </div>
                <div class="card w-full bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="text-red-500 card-title">What are the different ways to manage a state in a React application?</h2>
                        <ul>
                            <li>Use useReducer for Complex State</li>
                            <li>Custom Hooks</li>
                            <li>Global State Management: <small>For Exmple: <span className='text-green-500'> Redux </span> </small>  </li>
                            <li>Use Data Fetching Libraries : <small>For Exmple: <span className='text-green-500'> React Query </span> </small> </li>
                        </ul>

                    </div>
                </div>
                <div class="card w-full bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="text-red-500 card-title">How does prototypical inheritance work?</h2>
                        <p>The core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.</p>

                    </div>
                </div>
                <div class="card w-full bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="text-red-500 card-title">What is a unit test? Why should write unit tests?</h2>
                        <p>Essentially, a unit test is a method that instantiates a small portion of our application and verifies its behavior independently from other parts.</p>
                        <br />
                        <br />

                        <p>
                            Obviously, writing testable code requires some discipline, concentration, and extra effort. But software development is a complex mental activity anyway, and we should always be careful, and avoid recklessly throwing together new code from the top of our heads.

                            As a reward for this act of proper software quality assurance, we’ll end up with clean, easy-to-maintain, loosely coupled, and reusable APIs, that won’t damage developers’ brains when they try to understand it. After all, the ultimate advantage of testable code is not only the testability itself, but the ability to easily understand, maintain and extend that code as well
                        </p>

                    </div>
                </div>
                <div class="card w-full bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="text-red-500 card-title">Why I do not set the state directly in React. For example, if I have `const [products, setProducts] = useState([])`. Why I do not set `products = [...]` instead, I use the `setProducts`</h2>

                        <ul>
                            <li>If I update it directly, calling the setState() afterward may just replace the update I made.</li>
                            <li>When I directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</li>
                            <li>I will lose control of the state across all components.</li>
                        </ul>
                    </div>
                </div>
                

            </div>
        </div>

    );
};

export default Blogs;