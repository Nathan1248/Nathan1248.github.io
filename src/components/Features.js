import React from 'react'
import { Link } from 'react-router-dom'
import './Features.css'

function Features() {
    return (
        <div className="Features">
            <h1>Modern GUI Design</h1>
            <p>Create patient-specific models of vasculature using an intuitive and responsive user interface. Start with your image data by importing it to CRIMSON using one of a variety of supported formats or directly from your DICOM storage. Specify the approximate centerlines of the vessels in just a few clicks, use the segmentation toolbox to segment the vessel wall at multiple locations along the centerline and create the first 3D segmentation of one of the vessels using the most fitting lofting algorithm. Create the 3D segmentations for all the vessels of interest in the vessel tree and create a full 3D model through blending the individual vessels together. Create a 3D mesh and specify the simulation parameters and boundary conditions to prepare your patient-specific simulation for running on a supercomputer.</p>
            <p style={{textAlign: "center"}}>
            <img src={'/assets/features/modernGUIdesign.png'} width="600"></img>
            </p>

            <h1>Comprehensive Segmentation toolbox</h1>
            <p>Depending on the complexity of the vessel wall, use the simple circles or ellipses or more sophisticated semi-automatic segmentation techniques, such as region growing, to segment the vessel wall in 2D slice perpendicular to the centrelines of the vessels. Enjoy the full support of undo/redo operations, live preview of the 3D segmentation results and separate threads for lengthy operations that keep CRIMSON UI intuitive and responsive.</p>
            <p style={{textAlign: "center"}}>
            <img src={'/assets/features/segmentationToolbox.png'} width="400"></img>
            </p>

            <h1>​ADVANCED MESHING FEATURES</h1>
            <p>CRIMSON provides extremely powerful meshing tools allowing for endless flexibility to create the ideal mesh for each specific problem.</p>
            <p>For example, CRIMSON provides the end user with a number of powerful meshing features ideally suited to vascular modelling such as boundary layer specification to increase the number of elements close to the vessel wall, curvature refinement to resolve the mesh in regions of high curvature, mesh propagation, to propagate surface mesh parameters into the volume, and a simple method of defining mesh properties locally, providing a remarkable level of mesh parameterization in a clean, simple to use and intuitive interface.​</p>
            <p style={{textAlign: "center"}}>
            <img src={'/assets/features/meshParams.png'} width="600"></img>
            </p>
            <p>With the CRIMSON Mesh Exploration tool, the user can probe the mesh quickly and efficiently to explore the mesh volume and visually assess the mesh quality at any point in the domain.</p>
            <p style={{textAlign: "center"}}>
            <img src={'/assets/features/cutThroughMesh.png'} width="600"></img>
            </p>
            <p>CRIMSON has mesh adaptation capabilities, allowing the user to use the results of an initial simulation to refine the mesh and increase element density in regions of high error.</p>
            <p style={{textAlign: "center"}}>
            <img src={'/assets/features/fieldBasedMeshAdapt.png'} width="600"></img>
            </p>

            <h1>Graphical specification of boundary conditions</h1>
            <p>CRIMSON has a number of inbuilt boundary condition types, such as Windkessel RCRs, prescribed velocities, and user defined networks. Users can quickly and easily specify the boundary condition specific to each surface by simply selecting them interactively in the 3D display of your model and specifying the specific parameters. Parameters can be adjusted at any later stage. Initial conditions such as an initial pressure field or deformable walls can also be specified.</p>
            <p style={{textAlign: "center"}}>
            <img src={'/assets/features/bcToolbox.png'} width="600"></img>
            </p>
            <p>As well as the powerful inbuilt tools available, boundary conditions for each simulation may be specified in CRIMSON's intuitive boundary condition toolbox; we call these Netlist boundary conditions. Users simply select and connect from a range of components to quickly create an arbitrary, user defined 0D network of any vascular tree model. Once applied, face selection will persist even if the network is later modified by adding or removing or editing components in the 0D model.</p>
            <p style={{textAlign: "center"}}>
            <img src={'/assets/features/netlistGUI.png'} width="600"></img>
            </p>

            <h1>Patient-specific velocity profiles from PC-MRI/Colour Doppler image data</h1>
            <p>As well as allowing the imposition of idealised profiles such as parabolic, plug and Womersley, or 0D lumped parameter networks of the heart to generate an inflow profile, CRIMSON allows the use of patient-specific inlet and outlet velocity profiles automatically adapted from MRI images. CRIMSON allows you to tweak the degree of smoothing over time and space to impose a periodic velocity profiles at the boundary segment of choice and use the profile measured directly from the patient.</p>

            <p>Methodological details will be provided in our upcoming article, Optimal B-spline Mapping of Flow Imaging Data for Imposing Patient-specific Velocity Profiles in Computational Hemodynamics, A. Gomez et al. IEEE TBME. We ask that you cite this article if you use the tool.</p>
            <p style={{textAlign: "center"}}>
            <img src={'/assets/features/pcmri.png'} width="600"></img>
            </p>

            <h1>POSTPROCESSING</h1>
            <p>CRIMSON has inbuilt visualization tools. Following a simulation, postprocessed results of the time step under examination can be loaded via the Solver Setup's Solution management interface. Any field stored in the results file can be visualized. The Mesh Exploration Tool allows the visualization at any point in the mesh.</p>
            <p style={{textAlign: "center"}}>
            <img src={'/assets/features/postprocessing.png'} width="600"></img>
            </p>

            <h1>Custom Solver Setup via the CRIMSON Python Interface</h1>
            <p>While CRIMSON comes with many powerful ready to use features it may sometimes be desirable to use your own custom solver. The inbuilt Python™ interface allows the generation of simulation files for custom physics solvers. The CRIMSON Solver setup extension guide describes in detail the steps to create your own Python™ based interface.</p>
            <p style={{textAlign: "center"}}>
            <img src={'/assets/features/solverPython.png'} width="600"></img>
            </p>

            <h1>ARBITRARY Lagrangian Eulerian (ALE) Methods</h1>
            <p>In order to model vessel wall deformation when in the presence of pulsatile flow, boundary fitted Arbitrary Lagrangian Eulerian (ALE) methods are being incorporated into CRIMSON.  This re-meshing approach involves the use updating algorithms which revise the fluid Eulerian mesh so that node-on-node compatibility is maintained as the solid Lagrangian mesh deforms allowing the use of anisotropic, non-linear constitutive laws for the vessel wall. This is currently a feature under development and will be released in an upcoming version of CRIMSON.</p>
            <p style={{textAlign: "center"}}>
            <img src={'/assets/features/ale.gif'} width="600"></img>
            </p>

            <h1>CRIMSON AT a Glance</h1>
            <p style={{textAlign: "center"}}>
            <img src={'/assets/features/crimsonAtAGlance.png'} width="700"></img>
            </p>
        </div>
    )
}

export default Features