#version 330 core

layout (location = 0) out vec4 frag_color;

in vec2 vert_texcoord;

uniform sampler2D Display;

void main()
{
	frag_color = vec4(1.0, 0.0, 0.0, 1.0);
}