<article>
        <p><b style="font-size:30px">Latches</b><br></p>
        <p>
            Latches are type of sequential circuits and are the basic storage elements that operate with signal levels (rather than signal transitions).
        <br>The various types of latches include
        </p>
        <p><ul>
            <li>SR Latch</li>
            <li>Gated SR Latch</li>
            <li>D Latch</li>
            <li>JK Latch</li>
            <li>T Latch</li>
        </ul></p>
        <center><b style="font-size: 25px">D Latch</b><br></center>
        <p class="text"> <br>
            D-Latch is a latch which consists of two inputs D(Data) and E(Enable), and two output lines, Q and Q'.
            D-latches overcome one major disadvantage of the S-R Latch(In SR Latch, The output is invalid when both the inputs are high), because the two inputs to the
            inner SR Latch are always complements of each other.
            <br>
            <center><img src="D-latch.png" alt="D-latch" width="45%" height="60%" style="margin: auto 2.5%;">
            <p style="margin: auto 10%;"><b>Fig.1.</b> Circuit Diagram D-latche made with AND and NOR Gates <br><br></p>
            <img src="D-latch_nand.png" alt="D-latch" width="45%" height="40%"><br>        
            <p style="margin: auto 10%;"><b>Fig.2.</b> Circuit Diagram of D-latches made with NAND Gates
            </p> <br>
            <p>Booloean Expression for D-latch:
            <b><span class="eq"> Q<sub>n+1</sub> = E.D + E'.Q<sub>n</sub> </span></b></p><br>
            <img src="D-block.jpg" alt="Block Diagram" width="40%" height="60%" style="margin: auto 5% auto 10%;">
            <p style="margin: auto 10%;"><b>Fig.3.</b> Block Diagram of D latch
            </p> <br>
            <figure style="margin: 5% 12.5%">
            <center>
                <img src="D-truth.png" alt="Truth Table" width="33%" height="55%"><br>
                <img src="D-truth.png" alt="Truth Table" width="33%" height="55%"><br>
                <figcaption style="margin: auto 20%;"><span style="font-weight:bold">Fig.4. </span>Truth Table of D-latch
                </figcaption>
            </center>
            </figure>
        </p>
        <p>
            The D latch receives that designation from its ability to hold data in its internal storage. It is suited for use as a temporary storage for binary information between a unit
            and its environment. The binary information present at the data input of the D latch is
            transferred to the Q output when the enable input is asserted. The output follows
            changes in the data input as long as the enable input is asserted. This situation provides
            a path from input D to the output, and for this reason, the circuit is often called a transparent latch. When the enable input signal is de-asserted, the binary information that
            was present at the data input at the time the transition occurred is retained (i.e., stored)
            at the Q output until the enable input is asserted again. Note that an inverter could be
            placed at the enable input. Then, depending on the physical circuit, the external enabling
            signal will be a value of 0 (active low) or 1 (active high).
        </p>
        <p><b style="font-size: 20px">Stuck At Fault</b><br></p>
            <figure style="margin: auto 25%;">
                <img src="D-stuck.png" alt="Stuck at" width=75% height=100% style="margin:auto 15%;"><br>
                <figcaption><b>Fig.5.</b> A Stuck At 0 fault(SA0) in a circuit</figcaption>
            </figure>
        <p> <br>
            A stuck-at fault is a particular fault model used by fault simulators and automatic test pattern generation (ATPG) tools to mimic a manufacturing defect within an integrated circuit.
            Individual signals and pins are assumed to be stuck at Logical '1', '0' and 'X'. For example, an input is tied to a logical 1 state during test generation to assure that a manufacturing
            defect with that type of behavior can be found with a specific test pattern. Likewise the input could be tied to a logical 0 to model the behavior of a defective circuit that cannot switch
            its output pin. Not all faults can be analyzed using the stuck-at fault model. Compensation for static hazards, namely branching signals, can render a circuit untestable using this model.
            Also, redundant circuits cannot be tested using this model, since by design there is no change in any output as a result of a single fault.
        </p>
    </article>
