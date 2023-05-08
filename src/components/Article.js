import React from 'react';
import "../style/Article.css"

import ArImg from "../img/imgArticles/Articles1.jpg"
import ArImg2 from "../img/imgArticles/Articles2.jpg"
import ArImg3 from "../img/imgArticles/Articles3.jpg"
import ArImg4 from "../img/imgArticles/Articles4.jpg"
import ArImg5 from "../img/imgArticles/Articles5.jpg"
import AImg from "../img/imgArticles/AnatomyImg.png"
const Article = props => {

    const checkID = () => {
        if (props.id === "SHOULDER PAIN - HOW TO FIX IT") {
            return (
                <article className="article">
                    <img src={ArImg} alt="Shoulder Pain" />
                    <h2>SHOULDER PAIN - HOW TO FIX IT</h2>
                    <p>Shoulder injuries arise in a variety of ways and concern:</p>
                    <ul>
                        <li>athletes who tried to "throw the ball",</li>
                        <li>a person who has been pulled by the hand, e.g. a dog on a leash can pull hard,</li>
                        <li>a fall on the hands, forearms - may cause a violation in the area of the shoulder girdle,</li>
                        <li>formed without any visible injury.</li>
                    </ul>
                    <p>In each of these incidents, other parts of the shoulder are affected, so the shoulder must first be disassembled.</p>
                    <h3>Construction of the shoulder girdle.</h3>
                    <p>We need to know that there is no joint like the shoulder. The shoulder is the functional name for the connection of several joints, the more important ones are:</p>
                    <ul>
                        <li>the junction of the humerus with the scapula - shoulder joint,</li>
                        <li>connection of the clavicle with the scapula - acromioclavicular joint,</li>
                        <li>connection of the clavicle with the sternum - sternoclavicular joint,</li>
                        <li>connection of the scapula with the ribs.</li>
                    </ul>
                    <p>Injury to any of these areas can cause shoulder pain, but that doesn't mean that's where the problem is. The icing on the cake is the fact that neck problems can also cause shoulder pain, some muscles run from the shoulder to the nape (traps). I have a poem to remember                    </p>
                    <q>Though I stick to the back of my neck, I like to create shoulder pain.</q>
                    <h3>What can hurt there?</h3>
                    <p>So it seems clear that the first step to eliminating pain is to find the source of the problem. We have divided the shoulder into several separate parts, and each of them may have a problem:

                    – shoulder joint – as in every joint, there are bones, joint cartilage and ligaments connected to each other, which provide better stabilization. The muscles that are designed to press the humerus also play an important role. One muscle group presses the bone up (that's why when you carry shopping bags, the bone doesn't fall down). The second group presses the bone inwards. If the muscles do not show the correct tension, pain, skipping and limited range of motion may occur.

                     -connection of the clavicle with the shoulder and sternum. The clavicle is a bone that connects to the sternum on one side and connects to the shoulder on the other. On both sides, this connection is stiffened with ligaments and, as everywhere, these ligaments can stretch, tear, or even break. It turns out that it's not very difficult - crossfitters throwing a barbell to the chest during a snatch, a mother carrying a small child, or a plumber carrying a heavy tool bag over his shoulder are just a few examples of collarbone dislocation.

                     – the shoulder blade- slides over the ribs, but for this you need muscle balance, tense muscles block the shoulder blade, which limits the movement of the hand.

                     – degenerations - they can arise as in any joint, but they are often not the source and the diagnosis itself is simply wrong.</p>
                    <h3>What to do ?</h3>
                    <p>The management of shoulder pain depends on where the source of the problem is located, which is why the most important thing here is proper diagnosis (examination). In the office it looks like this:

                    anamnesis will determine whether the shoulder has ever been injured before, it may be a consequence of an old injury. The mechanism of injury is also important - when the pain appeared, whether after a fall on the side, or while playing volleyball, etc.
                     range of motion test - are you able to lift your arm as well as your healthy one, or do you have a problem with it. Ladies often say, "I can't fasten my bra."
                     palpation – that is, looking for abnormalities, painful places, hard lumps on the muscles by touch.
                     muscle balance test - allows you to determine whether the muscles are working properly, and thus whether they stabilize the shoulder well.
                     ligament tests - enable the assessment of damage to the ligaments - which are responsible for joint stabilization.
                     Only after such examination I am able to determine where the problem is, what has been stretched, what is working properly and what is not. Then we move on to rehabilitation.</p>
                </article>
            )
        } else if (props.id === "ELBOW PAIN.") {
            return (
                <article className="article">
                    <img src={ArImg2} alt="Elbow Pain" />
                    <h2>ELBOW PAIN.</h2>
                    <p>Each of us has hit our elbow at least once in our life and felt the piercing pain and suffering often called "electricity". This feeling is caused by irritation of the ulnar nerve and fortunately passes quickly. However, what to do when the elbow does not stop hurting, or our hand goes numb and our fingers ache and we feel that our hand is getting weaker? Apart from injuries such as: fracture, dislocation, impact, in my practice I have found two basic causes of pain in the elbow : pain from muscle overload, and pressure on the nerve running to the hand.</p>
                    <h3>Pain from overuse - tennis elbow.</h3>
                    <p>Overuse pain is nothing more than tired, overworked muscles. This situation occurs when we perform the same, repetitive movements for a long time, loading a specific muscle group - a classic example here is tennis elbow. In this condition, the constant, repetitive tennis racket hitting the ball requires a strong contraction of the muscles that straighten the wrist. These muscles attach to the lateral (outer) part of the elbow. If the muscles are overloaded, they will start to hurt. First only during a given effort, then during other activities, until finally the pain will accompany even everyday activities. It should be noted, however, that although the title example here is a tennis player - this affliction often affects IT specialists and office workers who excessively exploit their forearm muscles.

                    Another example is "golfer's elbow", which is the same overload pain, but occurring on the inside of the elbow.</p>
                    <h3>Nerve pressure.</h3>
                    <p> The nerves come from the spine and run to the hand. Think of them as very small telephone wires. By telephone, because they transmit information. This information transfer has two main functions:</p>
                    <ul>
                        <li>sensory, if you touch the hot water with your finger, you immediately feel the heat, right? Receptors receive a given stimulus and send it through the nerves to the brain. This is where the message comes in: HOT! Of course, this also applies to other stimuli: cold, vibration, pain, and so on.</li>
                        <li>motor, if I want to grab a glass in my hand, the message "grab a glass" appears in my brain. This information is sent by nerves that move specific muscles so that you can make a move.</li>
                    </ul>
                    <p>So you see that nerves are very important, both to feel stimuli and to control muscles and make movement. On the way from the spine to the hand, the nerves have to overcome many obstacles. They pass under the muscles, next to the ligaments, along the bones, pierce the fascia, penetrate the joints. Occasionally, a running nerve will be compressed (entrapped) by some structure. Then the function of such a nerve is impaired. This can cause various sensations (burning, pain, tingling) and can also impair muscle function (I can't hold a glass).

                    Think of the nerve as a garden hose with high-pressure water flowing through it. You are watering your flowers in the garden on a beautiful sunny day, cold water gushes out, soaking all your plants, until suddenly the pressure drops ... it gushes less and less, and less and less to me, until it barely drips. Indignant, you throw the snake and go look for the cause. You walk along the hose, you walk, until suddenly you see that in the middle of it someone put a bicycle crushing your hose, thus blocking the flow of water. A classic example is the compression of the scalene muscles of the neck on the nerves of the brachial plexus. If this muscle is too tight (contracted) it can compress the nerves. This condition is called anterior scalene syndrome. There are pain and sensory disturbances in the hand. Sometimes there is a weakening (and even atrophy) of the hand muscles.</p>
                </article>
            )
        } else if (props.id === "SPINE PAIN - WHAT TO DO") {
            return (

                <article className="article">
                    <img src={ArImg3} alt="Spine Pain" />
                    <h2>SPINE PAIN - WHAT TO DO</h2>
                    <p>Back pain affects more and more young people. Maybe you are an athlete and you feel pain in your loins when lifting weights? Maybe you work every day sitting at your desk and think that your back hurts from sitting? Maybe you are a young woman who has just given birth and is told that back pain is normal and will be. Or maybe you are in your forties, you have hernias, degenerations and you think that nothing can be done about it. Regardless of which group you belong to, you need to know that back pain can be overcome. Find out how!</p>
                    <h3>Structure of the spine.</h3>
                    <p>The spine is made up of small bones called vertebrae that connect to each other movably. You must know, however, that the spine is not straight, it has natural bends:</p>
                    <ul>
                        <li>lordosis - bending forward</li>
                        <li>kyphosis - backward bend.</li>
                    </ul>
                    <p>This construction results in better cushioning and can withstand higher loads. The spine is divided into sections: cervical (C), thoracic (TH) and lumbar (L). Between the vertebrae are intervertebral discs that contain a large amount of water and their task is to absorb loads and support movement. This is where a problem like: I have a popped disc, I have a hernia, sciatica, and so on often comes up.</p>
                    <p>A large number of muscles attach to the spine, with problems with the spine they can tense up, I often hear then:</p>
                    <q>See how hard it is here</q><br />
                    <q>But my muscles are tense</q>
                    <h3>Back problems.</h3>
                    <p>I talked about the fact that the spine has natural bends, unfortunately, there can also be a curvature that should not be there. Most often we associate it with children wearing a backpack on one shoulder, slouching in front of the desk, however, the curvature is also caused by one-sided work, e.g. in a factory when you constantly turn to one side, take some element, put it in the machine and twist again. A frequent source of the problem is also a bad position at the desk, e.g. keeping the monitor in a different place than the keyboard. If you type something on the keyboard and have the screen in front of you, you are quite "simple". If you move the monitor 30 cm to the left, your neck is slightly twisted. Maybe the sprain is small, but 5 hours a day, 5 days a week, four weeks, that's a lot of hours in this position in a month. This is when the short muscles around the spine tighten, harden and hurt.</p>
                    <h3>Degenerations.</h3>
                    <p>Very often I hear in the office: "My spine hurts because I have degeneration". People are convinced that if they did an x-ray of the spine and something came out wrong, it must be the cause of the pain. The question is just that</p>
                    <q>"How do you know that it is degeneration that hurts you?"</q>
                    <p>There are many ligaments, muscles, discs in the spine, and the pain itself can be caused even by another part of the body - have you examined all this and do you know that it is definitely degeneration? Studies show that 37% of people aged 20 show degeneration of the lower spine!</p>
                    <h3>Hernias.</h3>
                    <p>A hernia is simply the "pouring out" of the disc. With such damage, what spills out can compress the nerves - this is how sciatica arises, it gives back pain, numbness, burning, problems with bending. There are different stages of a disk spill:</p>
                    <ul>
                        <li>initial degeneration - slight changes taking place inside the disc,</li>
                        <li>herniation (protrusion) - changes begin to manifest themselves outside the disc, but do not interrupt its continuity,</li>
                        <li>hernia (extrusion) - the pouring disc breaks the annulus and spills out,</li>
                        <li>sequestration - what spills out breaks away from the rest.</li>
                    </ul>
                    <p>Some people think that the only way to treat a hernia is surgery. However, studies show that 70% of hernias can spontaneously regress! However, I do not recommend waiting for a miracle and watching the hernia regress by itself. If it happened because ... you have a bent spine, bad posture, incorrect position at work, then do not wait for the problem to disappear by itself, go to a specialist who will determine why it happened. This will greatly increase your chances. During the Olympic Games in Rio de Janeiro (2016), athletes were randomly tested. They found that 52% of them had moderate or severe back disease. It means that one of the best athletes in the world during the competition goes out, runs, throws, jumps and manages, and you can't straighten up completely, you take injections and L4? This doesn't hold up.</p>
                    <h3>Tense muscles.</h3>
                    <p>Poor alignment of the spine can cause the muscles to tense which will cause pain.</p>
                    <h3>Does running damage your spine?</h3>
                    <p>This is a common question I hear, but the answer is complex. In general, the intervertebral discs of runners are in BETTER CONDITION than those of physically inactive people (they are higher). Certainly, this is a good tip for those who have a healthy spine and want it to stay that way. However, if you already have a diagnosed problem (hernia, curvature, etc.), running MAY make your problem worse.</p>
                    <h3>What are you doing ?</h3>
                    <p>If you do not have problems with your spine, I encourage you to exercise. Studies show that exercise reduces back problems and keeps it healthy.
                     However, if you already have a problem, go to a specialist who will find the cause of your ailments, examine muscles, ligaments and other structures, and if necessary, order imaging tests such as X-ray or MRI.
You certainly shouldn't wait for it to pass. </p>
                </article>
            )
        } else if (props.id === "WHAT TO DO IF THE KNEE BURN") {
            return (
                <article className="article">
                    <img src={ArImg4} alt="Knee Burn" />
                    <h2>WHAT TO DO IF THE KNEE BURN</h2>
                    <p>If you are reading this, you probably have a problem with knee pain. Maybe it gets stuck sometimes, something "shoots", or maybe you hear an unpleasant friction when you try to straighten your leg. All of these situations can be caused by a direct injury, for example you played football, you slipped on the grass, something shot your knee and now it hurts. The problem may also be due to overload, because it is often the case that a patient comes to the office who claims that he has not had an accident - and the knee hurts.</p>
                    <h3>The most common knee injuries.</h3>
                    <p>The meniscus are two wedges in the knee. These wedges are inserted between the femur and lower leg bones and are intended to improve stability. Sometimes, however, it happens that some incorrect, too rapid movement can cause the meniscus to jam or rupture. Depending on the type of injury, various treatment methods are used, starting from rest, through rehabilitation, to surgery.

Ligaments. There are a large number of ligaments in the knee, they are very short (several to several dozen cm) bands of connective tissue that can be compared to a tape that is supposed to hold two elements. Ligaments are very strong (some can withstand even several tons), but sometimes you can be unlucky and break one. Ligament injuries are divided into:</p>
                    <ul>
                        <li>Grade 1 injuries, where a small number of ligament fibers are torn, pain occurs, but no instability occurs,</li>
                        <li>Grade 2 injuries, more fibers are torn, pain occurs, normal movement is hampered,</li>
                        <li>Grade 3 injuries, complete ligament tear, pain, joint is unstable. How a ligament injury is treated depends on the extent of the injury.</li>
                    </ul>
                    <h3>Patellar injuries.</h3>
                    <p>The kneecap is a peach-sized bone built into the knee. Bending and straightening the kneecap slides up and down and this is its main task. This slide takes place along a special track (such a gutter so that the kneecap does not jump out), but sometimes it happens that this small bone "jumps out" to the side - then we are dealing with a subluxation of the kneecap. If it does not slide along the marked trough and more and more runs to the side, it is called lateral patellar pressing. The kneecap is covered with cartilage from the bottom (like a thick ointment) which prevents the kneecap from rubbing off. However, if this cartilage wears off too much, doctors diagnose patellar chondromalacia - in my opinion, this diagnosis is heavily abused, to be honest, it seems to me that if the examiner does not know what to say, he simply says: "patella chondromalacia".</p>
                    <h3>I have degenerations.</h3>
                    <p>
                    By the way, if someone were to offer you injections of hyaluronic acid, this study says that this acid works in the same way as a placebo:
                    </p>
                    <h3>Dlaczego boli mnie kolano ?</h3>
                    <p>Już na tym etapie  pewnie się domyślasz, że nie da się odpowiedzieć na pytanie: „dlaczego boli mnie kolano i co mam z tym zrobić?”. Jeśli boli Cię kolano, może to być spowodowane urazem łąkotek, naderwanie więzadeł, może jest problem z rzepką, naciągnąłeś mięśnie. a może to jeszcze coś innego ? Nie da się odpowiedzieć bez prawidłowego badania (diagnostyki).</p>
                    <h3>Nie powiem Ci co to jest dopóki… Cię nie przebadam.</h3>
                    <p>Zawsze powtarzam, że najważniejszą rzeczą w gabinecie jest wywiad i badanie. Po rozmowie z pacjentem można się dowiedzieć:</p>
                    <ul>
                        <li>did he have an accident?</li>
                        <li>did the pain come on suddenly?</li>
                        <li>is there anything that increases the pain?</li>
                        <li>has he done anything about it? E.t.c.</li>
                    </ul>
                    <p>Then we move on to the study. Performs muscle tests to see if your muscles are in the correct tone. I check the stability of knee ligaments, perform orthopedic tests, examine the range of motion and compare it with a healthy leg. To this I add palpation (touching) where I am looking for painful or abnormal places (e.g. something skips, stings, burns, etc.). Only then can I tell where the problem lies, what is broken and how to fix it.</p>
                    <h3>Or is it rheumatism?</h3>
                    <p>Sometimes, when a patient comes to the office (not only with a knee), I hear: "maybe it's rheumatism, my mother was sick". That's why I want you to know now how to recognize rheumatism:</p>
                    <ul>
                        <li>Often affects the same joints on both sides (in pairs)</li>
                        <li>Affects small joints (fingers, feet, wrists)</li>
                        <li>Pain and stiffness - especially in the morning</li>
                        <li>Edema,</li>
                        <li>Affection,</li>
                        <li>Restriction of mobility,</li>
                        <li>Joint deformity.</li>
                    </ul>
                    <p>So if after playing basketball your knee swells up, something crackles in it and hurts, it's probably not rheumatism, because ... it doesn't hurt even, it's not a small joint, you didn't feel stiff in the morning, etc. To be sure, just go to specialist.</p>
                </article>
            )
        }
        else if (props.id === "HIP CLICKING - FIX IT!") {
            return (
                <article className="article">
                    <img src={ArImg5} alt="Hip Clicking" />
                    <h2>HIP CLICKING - FIX IT!</h2>
                    <p>The jumping/shooting hip is, next to degeneration of the hip joint, probably the most common ailment in this area of the body. Although it is often painless, and the only disturbing symptom is a palpable (and sometimes audible) skipping, this problem should not be underestimated.</p>
                    <img src={AImg} alt="" />
                    <h3>What can jump over there?</h3>
                    <p>If we look at the illustration of the left hip, we can distinguish several elements there:
                     7- gluteus medius, 1- tensor fascia lata, 3- gluteus maximus, 4- iliotibial band.
                     The tensor fascia lata (1) and the gluteus maximus (3) are arranged in a characteristic way, which is why this arrangement has been called the "muscular triangle of the hip". It is the incorrect tension of these structures that can lead to the formation of the characteristic crackling.</p>
                    <p>Excessive tension of certain elements, most often the iliotibial band, causes "hooking" on the greater trochanter of the femur. The persistence of this situation can lead to irritation of the bursa (cushion) that separates the trochanter from the muscles.</p>
                    <h3>What to do with hopping in the hip?</h3>
                    <p>Dso far, the most common procedure recommended in this case was to relax the tense structures - mainly the fascia lata of the thigh. For this purpose, it is often recommended: massage, dry needling, rolling, etc. However, instead of relaxing without thinking, I suggest asking yourself one question:
                     "Why does the iliotibial band get too tight"?
                     That's why I do muscle tests in my office. As it turns out, this band often stretches too much because it has to make up for colleagues who slack off - even the gluteus maximus. When this muscle is inactive, our body has to cope in a different way. Moving on, if we have an inactive gluteus and a tibial band that works too much - but we start to loosen them up - then we have an inactive buttock and a band that can't do the work for it because it's being massaged, rolled, needled, etc.</p>
                    <p>Therefore, the first step of the therapist should be to examine the muscle balance, and then to find the cause of abnormalities - if any.</p>
                    <h3>Degeneration or jumping hip? Don't be fooled!</h3>
                    <p>Often, when we have pain problems, we are directed by the doctor for X-ray. That may also be the case here. However, if our problem comes from improperly working muscles, the X-ray will not show anything. It may, however, show degenerative changes to which our ailments will be unjustifiably attributed. This may result in unnecessary prescribing of medication or even threatening treatment.</p>
                    </article>
            )
        }
    }


    return (
        <div>
            {checkID()}

        </div>
    );
}

export default Article;
