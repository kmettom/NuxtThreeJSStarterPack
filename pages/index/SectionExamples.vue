<template>
  <div class="">
    <Container>
      <h2 class="heading-2">
        <!--        v-canvas3-scroll-action="{ activeRange: 0.9, activateOnce: true }"-->
        <span> EXAMPLES </span>
      </h2>
      <div>
        <div class="examples-row">
          <div class="example-wrapper">
            <h3 class="body-l heading-example">Add images to scene 😌</h3>
            <img
              v-canvas3-image="{
                shaderName: 'example1',
              }"
              :src="'/images/01.webp'"
              alt="building"
            />
            <CodeSnippet>
              <span> {{ String("<") }}</span
              >Canvas3Image <br />
              &nbsp;&nbsp;:src-link="'images/01.JPG'" <br />
              &nbsp;&nbsp;:shader="'example1'" <br />
              &nbsp;&nbsp;:load-strategy="'eager'"<br />
              />
            </CodeSnippet>
          </div>

          <div
            class="example-wrapper"
            @mouseenter="example1Hover = true"
            @mouseleave="example1Hover = false"
          >
            <h3 class="body-l heading-example">
              Add shader uniforms
              <span class="">(hover: {{ example1Hover ? "👍" : "👎" }})</span>
            </h3>
            <img
              v-canvas3-image="{
                uniforms: ex2ImageUniforms,
                shaderName: 'example0',
              }"
              :src="'/images/02.webp'"
              alt="building"
            />
            <CodeSnippet>
              <span> {{ String("<") }}</span
              >Canvas3Image <br />
              &nbsp;&nbsp;:src-link="'images/02.JPG'"<br />
              &nbsp;&nbsp;:shader="'example2'"<br />
              &nbsp;&nbsp;:uniforms="{<br />
              &nbsp;&nbsp;&nbsp;&nbsp;uHover: {<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: example1Hover ? 1 :
              0,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;duration: 0<br />
              &nbsp;&nbsp;&nbsp;&nbsp;}<br />
              &nbsp;&nbsp;}"<br />
              />
            </CodeSnippet>
          </div>
        </div>
        <div class="example-row-second">
          <h3 class="body-l heading-example">
            Directive for scroll manipulation and feedback
          </h3>
          <p class="example-txt">
            Use directive for scroll manipulation and feedback. All Canvas3Image
            or Canvas3Text get activated automatically by uAniIn uniform float
            variable
          </p>
          <div class="examples-row">
            <div
              v-canvas3-scroll-action="example3ScrollOptions"
              class="example-wrapper"
            >
              <div class="code-example-wrapper">
                <p class="example-txt">
                  Scroll speed: {{ example3Speed }}
                  <span ref="scrollSpeedAniEl" class="scroll-speed-ani" />
                </p>
                <img
                  v-canvas3-image="{
                    uniforms: {
                      uAniInImage: {
                        value: example3Speed,
                        duration: 0,
                        ease: 'linear',
                      },
                      uTextureMaskNoise: {
                        value: animationAssets.getTextureMaskNoise(),
                      },
                      uTexturePrevious: {
                        value: animationAssets.getTextureDefaultBlack(),
                      },
                    },
                    shaderName: 'example0',
                  }"
                  :src="'/images/03.webp'"
                  alt="sky"
                />
                <CodeSnippet>
                  v-canvas3-scroll-action="{ <br />
                  &nbsp;&nbsp;activeRange: 0.9,<br />
                  &nbsp;&nbsp;onScrollCallback: (item, speed) => {
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;// do something on scroll<br />
                  }"
                </CodeSnippet>
              </div>
            </div>
            <div
              v-canvas3-scroll-action="example4OuterOptions"
              class="example-4 example-wrapper"
            >
              <!--              xxx1-->
              <div v-canvas3-scroll-action="example4InnerOptions">
                <p class="example-txt">
                  Set Scroll speed of elements
                  <span ref="exampleActivateTxtEl" class="example-activate-txt"
                    >Activated 👋</span
                  >
                </p>
                <img
                  v-canvas3-image="{
                    shaderName: 'example4',
                    uniforms: {
                      uAniInExample4: {
                        duration: 0.35,
                        value: uAniInExample4Value,
                        ease: 'linear',
                      },
                    },
                  }"
                  :src="'/images/04.webp'"
                  alt="sky"
                />
              </div>
              <CodeSnippet>
                v-canvas3-scroll-action="{ <br />
                &nbsp;&nbsp;activeRange: 0.7,<br />
                &nbsp;&nbsp;scrollSpeedSetTo: { value: 0.3 },<br />
                &nbsp;&nbsp;bidirectionalActivation: true,<br />
                &nbsp;&nbsp;activateCallback: (item, speed) => {
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;// do something when activated<br />
                }"
              </CodeSnippet>
            </div>
            <div
              id="fixedParent"
              v-canvas3-scroll-action="{
                activeRange: 0.9,
                fixToParent: {
                  containerId: 'fixedParent',
                  fixPosition: 0,
                  margin: 0,
                },
              }"
              class="fixed-scroll-example example-wrapper"
            >
              <div>
                <p class="example-txt">Fix element to Parent</p>
                <img
                  v-canvas3-image="{
                    uniforms: {
                      uHover: {
                        value: example2Hover ? 1 : 0,
                        duration: 0.55,
                        ease: 'linear',
                      },
                    },
                    shaderName: 'example1',
                  }"
                  :src="'/images/01.webp'"
                  alt="building"
                />
                <CodeSnippet>
                  v-canvas3-scroll-action="{<br />
                  &nbsp;&nbsp;activeRange: 0.9,<br />
                  &nbsp;&nbsp;fixToParent: {<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;containerId: 'fixedParent',<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;fixPosition: 0,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;margin: 0,<br />
                  &nbsp;&nbsp;},<br />
                  }"
                </CodeSnippet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import Container from "~/components/common/Container.vue";
import CodeSnippet from "~/components/common/CodeSnippet.vue";
import gsap from "gsap";

//TODO: proper type import export
import type { ScrollActionBinding } from "../../../canvas3-nuxt/dist/runtime/types/types";
import { useAnimationAssets } from "~/stores/animationAssets";

const example1Hover = ref(false);
const example3Speed = ref(0);
const uAniInExample4Value = ref(0);
const example2Hover = ref(false);
const scrollSpeedAniEl = ref<HTMLElement | null>(null);
const exampleActivateTxtEl = ref<HTMLElement | null>(null);

const onExample3Scroll = (item: ScrollActionBinding, speed: number) => {
  example3Speed.value = speed;
  gsap.to(scrollSpeedAniEl.value, {
    width: `${speed * 100}%`,
    duration: 0.1,
  });
};

const animationAssets = useAnimationAssets();

const ex2ImageUniforms = computed(() => {
  return {
    uAniInImage: {
      value: example1Hover.value ? 1 : 0,
      duration: 0.5,
      ease: "linear",
    },
    uTextureMaskNoise: { value: animationAssets.getTextureMaskNoise() },
    uTexturePrevious: { value: animationAssets.getTextureDefaultBlack() },
  };
});

const example3ScrollOptions = computed(() => ({
  activeRange: 0.9,
  onScrollCallback: onExample3Scroll,
}));

const example4OuterOptions = {
  activeRange: 1,
  scrollSpeedSetTo: { value: 0.3, duration: 0 },
};

const example4InnerOptions = {
  activeRange: 0.7,
  activateCallback: () => {
    const tl = gsap.timeline();
    tl.to(exampleActivateTxtEl.value, { x: -10, opacity: 1, duration: 0.5 });
    tl.to(exampleActivateTxtEl.value, { x: 0, opacity: 0, duration: 0.5 });
    uAniInExample4Value.value = 1;
  },
  deactivateCallback: () => {
    uAniInExample4Value.value = 0;
  },
};
</script>

<style lang="scss" scoped>
.heading-2 {
  padding-top: 50px;
  padding-bottom: 20px;
}

.heading-example {
  padding-bottom: 10px;
}

.examples-row {
  display: flex;
  padding: 20px 0;
}

.example-row-second {
  padding-top: 75px;
}

.example-wrapper {
  width: 50%;
  padding: 0 15px;
}

.example-txt {
  padding: 10px 0;
  position: relative;
}

.fixed-scroll-example {
  margin-right: 10px;
  border-right: 1px solid var(--light-color);
  height: 1000px;
  margin-bottom: 100px;
}

.scroll-speed-ani {
  position: absolute;
  bottom: 2px;
  left: 0;
  border-bottom: 5px solid var(--light-color);
}

.example-activate-txt {
  //color: var(--light-color);
  opacity: 0;
  position: absolute;
  font-weight: bold;
  bottom: 10px;
  right: 0;
}
</style>
