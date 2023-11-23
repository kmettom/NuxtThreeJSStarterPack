#version 330 core

in vec2 TexCoord;
out vec4 FragColor;

uniform sampler2D inputTexture;
uniform vec2 screenSize;
const int kernelSize = 9;
float kernel[kernelSize];

void main()
{
    // Set up the Gaussian kernel
    float sigma = 2.0;
    float twoSigmaSquared = 2.0 * sigma * sigma;
    float constant = 1.0 / (twoSigmaSquared * 3.14159265359);

    float totalWeight = 0.0;
    for (int i = 0; i < kernelSize; ++i)
    {
        int offset = i - (kernelSize / 2);
        kernel[i] = constant * exp(-float(offset * offset) / twoSigmaSquared);
        totalWeight += kernel[i];
    }

    // Normalize the kernel weights
    for (int i = 0; i < kernelSize; ++i)
    {
        kernel[i] /= totalWeight;
    }

    // Apply the blur
    vec3 blur = vec3(0.0);
    for (int i = 0; i < kernelSize; ++i)
    {
        int offset = i - (kernelSize / 2);
        vec2 texOffset = vec2(float(offset)) / screenSize;
        blur += kernel[i] * texture(inputTexture, TexCoord + texOffset).xyz;
    }

    FragColor = vec4(blur, 1.0);
}
