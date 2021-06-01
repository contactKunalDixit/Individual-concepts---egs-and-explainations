Q:  What is Asynchronous?

A:  Normally, a given prog's code runs straight along, with only one thing happening at once. If a function relies on the result of another function, it has to wait for the other function to finish and return, and untill that happens, the entire prog is essentially stopped from the perspective of the user.

    for e.g., MAC users sometimes experience this as the spinning wheel. Through this spinnig wheel, the operating system states "that the current program you're using has had to stop and wait for something to finish up, and you'd have to wait until the other function finishes up in order to resume your work". 
    
    Obviously, this behaviour is not very effecient especially in an era where you have multiple processor cores which can take the task up and execute it and let you know when its done. This lets you get other work done in the meantime, which is the basis of ASYNCHRONOUS PROGRAMMING. 

    It is upto the programming environment you are using(web browsers, in the case of web development) to provide you with APIs that allow you to run these tasks ASYNCHRONOUSLY.

    ASYNCHRONOUS TECHNIQUES are very useful in web programming.


Q:  What is BLOCKING code?

A:  Generally, when a web app runs in a browser and it executes extensive chunk of code without returning control to the browser, the browser can appear to be frozen. This is called BLOCKING. The browser is blocked from executing other tasks, like continuing to handle user inputs until the web app returns control of trhe processor.

    To render a real world problem (https://mdn.github.io/learning-area/javascript/asynchronous/introducing/simple-sync-ui-blocking.html), 
    Of the 2 buttons, the 1st button renders 1 million blue dots and 2nd button is an alert for a message, Now if you click the 2nd button immidiately after clicking the 1st button, the alert only appears after the execution of the entire code triggered by clicking the 1st button. 

    The 1st button blocks the second function until it has finished running.. This is a common problem that developers of real apps fight to mitigate all the time.

    The reason for the way it all transpires and blocking happens is because JAVASCRIPT is a SINGLE THREADED language.

    A thread means a single process that a program can use to complete tasks. Each thread can do only a single task at once.
                                     Task A --> Task B --> Task C
    Each task will run sequentially; a task has to complete before the next one can be started.


But the JAVASCRIPT is a SINGLE THREAD language, hence all tasks run sequentially on MAIN thread. hence on visualisation, our example looks like this:


        main thread: Render circles to canvas as a result of click button1      -->     Display alert()

Solution :  Over the years, JAVASCRIPT evolved and gained some tools called "WEB WORKERS" to help with this problem of SEQUENTIALITY.
            Web Workers allow you to send some of the JAVASCRIPT processing off to a seperate thread, called a worker so that you can run multiple JAVASCRIPT chunks simultaneously. You's generally use a worker to run expensive processes off the main thread so the user interaction is not blocked

        main thread:    Task A --> Task C
        worker thread:  Expensive Task B  

        Thus with this, the expensive Task B doesn't block the subsequent code. But what if task C is dependent on the results of Task B. IT WILL GIVE AN ERROR.

thus 

W O R K E R S    C A N N O T    B E     A      R E L I A B L E     S O L U T I O N 

because: they have thier limitations:

1)  Web workers CANNOT access the DOM   - You can't get a worker to directly do anything to update the UI. In one of our above e.g., you can NOT rendor the 1 million blue circles inside our worker; it can basically just do the number crunching but can NOT render it on the UI.

2)  Although, the code run in a WORKER is non blocking, it is still basically SYNCHRONOUS. This becomes a problem when a function relies on the results of multiple processes for its execution.

SOLUTIONS: One solution could be, to make the browsers to allow us to run certain operations ASYNCHRONOUSLY. Features like 'PROMISES' allow us to set an operation running (e.g. fetching of an image from the server) and then wait until the result has returned before running another operation.
        Since the operation is happening somewhere else, the main thread is not blocked while the ASYNC operation is bein processed.


